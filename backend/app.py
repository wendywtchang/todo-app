from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = [
    {"id": 1, "title": "買牛奶", "done": False},
    {"id": 2, "title": "寫Docker作業", "done": False}
]

@app.route("/api/todos")
def get_todos():
    return jsonify(todos)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
