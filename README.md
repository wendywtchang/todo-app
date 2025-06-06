# 🧩 Todo App – Full Stack with Docker & Cloud Deployment

A simple full-stack **Todo application** using **React (Vite)** as frontend and **Flask** as backend, containerized with **Docker**, extended with **PostgreSQL**, and deployed to **AWS EC2**. This project is part of a weekly DevOps + Fullstack learning journey.

---

## ✅ Features Summary

- 🧾 Add / Delete / Edit todos
- ✅ Mark as done / undone
- 🔍 Filter: All ｜ Done ｜ Undone
- 🐘 Store tasks in PostgreSQL with persistent volume
- 📦 Fully containerized with Docker Compose
- 🌐 API hosted on AWS EC2 (Flask backend)
- 📋 GitHub version control & Actions CI/CD setup
- 🧪 Init / Clear routes for test seeding
- 🎨 Frontend powered by React (Vite)

---

## 🧰 Tech Stack

| Layer       | Tech                              |
|-------------|-----------------------------------|
| Frontend    | React + Vite                      |
| Backend     | Python + Flask                    |
| Database    | PostgreSQL (via Docker container) |
| DevOps      | Docker, docker-compose            |
| Deployment  | AWS EC2                           |
| CI/CD       | GitHub Actions                    |
| Extras      | `.env` secrets, DBeaver for GUI   |

---

## 🗂️ Project Structure

```bash
todo-app/
├── backend/             # Flask API
│   ├── app.py
│   └── requirements.txt
├── frontend/            # React (Vite)
│   ├── src/
│   ├── public/
│   └── ...
├── .github/workflows/   # GitHub Actions CI/CD
│   └── deploy.yml
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 🖥️ Local Development

```bash
docker compose up --build
```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:5000/api/todos  

Test Routes:
- `GET /api/init` – seed sample todos  
- `GET /api/clear` – clear all todos  

---

### ☁️ Live EC2 Deployment

- API: `http://<your-ec2-ip>:5000/api/todos`  
- Update code: `git push origin main` → GitHub Actions will deploy

---

## 🧭 Weekly Learning Plan

| Week     | Topic                    | Description                                                      |
|----------|--------------------------|------------------------------------------------------------------|
| ✅ Week 1 | Dockerized Todo App      | Build Flask + React app in containers                            |
| ✅ Week 2 | Add PostgreSQL + CRUD    | Connect backend to DB, complete full CRUD                        |
| ✅ Week 3 | AWS EC2 Deployment + CI  | Deploy backend to EC2 with GitHub Actions                        |
| ⬜ Week 4 | OpenAI API Integration   | Summarize / organize tasks with GPT                              |
| ⬜ Week 5 | Voice Input / Reminders  | Add TTS or voice command support                                 |

---

## 📌 What I Learned So Far

- 🔧 Dockerfile / docker-compose basics
- 🔄 React ↔ Flask communication
- 🐛 Debugging CORS & port issues in containers
- ⚙️ PostgreSQL with SQL + GUI (DBeaver)
- ☁️ AWS EC2 setup & Linux terminal usage
- 🤖 GitHub Actions YAML for auto-deploy
- 🧠 How production differs from local dev

---

## ✅ EC2 Deployment Notes

- Remember to open EC2 port 5000 in Security Group
- Use `app.run(host="0.0.0.0", port=5000)` to expose backend
- Commit changes on EC2:
  ```bash
  git config --global user.name "your-name"
  git config --global user.email "you@example.com"
  git add .
  git commit -m "Updated on EC2"
  git push origin main
  ```

---

## 🔗 Future Plans

This project will evolve into a portfolio-quality example integrating:
- ✨ OpenAI GPT features
- 📢 Voice interaction (Web Speech API / Whisper)
- 🌐 Frontend deployment via GitHub Pages or S3 + CloudFront
- 📈 Optional dashboard or analytics view
