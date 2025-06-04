import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        console.log("✅ fetch result:", data);
        setTodos(data);
      })
      .catch(err => {
        console.error("❌ fetch error:", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📋 Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
