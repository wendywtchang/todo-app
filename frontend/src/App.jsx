import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [filter, setFilter] = useState('all');


  // 取得目前的 todos
  const fetchTodos = () => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data);
      })
      .catch(err => {
        console.error("❌ fetch error:", err);
      });
  };

  // 新增 todo
  const addTodo = () => {
    if (!newTodo.trim()) return;
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo })
    })
      .then(res => {
        if (res.ok) {
          setNewTodo('');
          fetchTodos();
        }
      })
      .catch(err => {
        console.error("❌ add error:", err);
      });
  };

  // 刪除 Todo
  const deleteTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          fetchTodos(); // 重新取得最新列表
        }
      })
      .catch(err => {
        console.error("❌ delete error:", err);
      });
  };

  const toggleDone = (id) => {
    fetch(`/api/todos/${id}/toggle`, {
      method: 'PATCH'
    })
      .then(res => {
        if (res.ok) {
          fetchTodos(); // 切換成功後重新抓資料
        }
      })
      .catch(err => {
        console.error("❌ toggle error:", err);
      });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'undone') return !todo.done;
    return true;
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  // Edit
  const confirmEdit = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editingText })
    })
      .then(res => {
        if (res.ok) {
          setEditingId(null);
          setEditingText('');
          fetchTodos();
        }
      });
  };


  return (
    <div style={{ padding: 20 }}>
      <h1>📋 Todo List</h1>

      {/* ✅ 新增任務區塊 */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: 8, width: '60%', marginRight: 8 }}
        />
        <button onClick={addTodo} style={{ padding: 8 }}>
          add
        </button>
      </div>

      {/* ✅ 篩選功能按鈕 */}
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setFilter('all')}>全部</button>
        <button onClick={() => setFilter('done')} style={{ marginLeft: 8 }}>✅ 已完成</button>
        <button onClick={() => setFilter('undone')} style={{ marginLeft: 8 }}>⬜ 未完成</button>
      </div>

      {/* ✅ 清單列出 filteredTodos */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            <button onClick={() => toggleDone(todo.id)} style={{ marginRight: 8 }}>
              {todo.done ? '✅' : '⬜'}
            </button>

            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => confirmEdit(todo.id)}>✔️</button>
                <button onClick={() => setEditingId(null)}>✖️</button>
              </>
            ) : (
              <>
                {todo.title}
                <button onClick={() => {
                  setEditingId(todo.id);
                  setEditingText(todo.title);
                }} style={{ marginLeft: 8 }}>✏️</button>
              </>
            )}

            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8, color: 'red' }}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
