from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app)

# 讀取 .env 環境變數
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")

# 建立 DB 連線
conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)
cur = conn.cursor()

# 初始化資料表
cur.execute("""
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
);
""")
conn.commit()

@app.route("/api/todos")
def get_todos():
    cur.execute("SELECT id, title, done FROM todos ORDER BY id")
    rows = cur.fetchall()
    return jsonify([
        {"id": row[0], "title": row[1], "done": row[2]}
        for row in rows
    ])

@app.route("/api/todos", methods=["POST"])
def add_todo():
    data = request.get_json()
    title = data.get("title")
    cur.execute("INSERT INTO todos (title) VALUES (%s)", (title,))
    conn.commit()
    return jsonify({"status": "ok"}), 201

@app.route("/api/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    # 執行 SQL 指令，根據 ID 刪除 todo
    cur.execute("DELETE FROM todos WHERE id = %s", (todo_id,))
    conn.commit()
    return jsonify({"status": "deleted"})

@app.route("/api/todos/<int:todo_id>", methods=["PUT"])
def update_todo(todo_id):
    data = request.get_json()
    new_title = data.get("title")
    cur.execute("UPDATE todos SET title = %s WHERE id = %s", (new_title, todo_id))
    conn.commit()
    return jsonify({"status": "updated"})

@app.route("/api/todos/<int:todo_id>/toggle", methods=["PATCH"])
def toggle_todo_done(todo_id):
    cur.execute("UPDATE todos SET done = NOT done WHERE id = %s", (todo_id,))
    conn.commit()
    return jsonify({"status": "toggled"})

@app.route("/api/init")
def init_sample_data():
    cur.execute("INSERT INTO todos (title, done) VALUES (%s, %s)", ("買牛奶", False))
    cur.execute("INSERT INTO todos (title, done) VALUES (%s, %s)", ("寫 Docker 作業", False))
    conn.commit()
    return jsonify(todos)

@app.route("/api/clear")
def clear_all():
    cur.execute("DELETE FROM todos")
    conn.commit()
    return jsonify({"status": "cleared"})



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
