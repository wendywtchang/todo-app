# 🧩 Todo App – Full Stack with Docker

A simple full-stack **Todo application** using **React (Vite)** as frontend and **Flask** as backend, containerized with **Docker** and orchestrated with **docker-compose**.

---

## ✅ Project Description

This is part of a weekly DevOps learning journey where I integrate frontend, backend, containerization, and cloud deployment. The project will later be extended with a database and OpenAI-powered features.

---

## 🧰 Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Flask (Python)
- **Containerization**: Docker, docker-compose
- **API Proxy**: Vite proxy setup
- *(Planned)* PostgreSQL, OpenAI API, GitHub Actions, AWS EC2/S3

---

## 🚀 How to Run

```bash
docker-compose up --build
```

Then open your browser:
Frontend: http://localhost:5173
Backend API: http://localhost:5000/api/todos

---

## 📅 Planned Weekly Progress (Learning Roadmap)

| Week     | Topic                    | Description                                                      |
| -------- | ------------------------ | ---------------------------------------------------------------- |
| ✅ Week 1 | Dockerized Todo App      | Build simple Flask + React app with Docker                       |
| ⬜ Week 2 | Add PostgreSQL DB        | Connect backend to PostgreSQL container using `.env`             |
| ⬜ Week 3 | Deploy to AWS + CI/CD    | EC2 for backend, S3 for frontend, GitHub Actions for auto-deploy |
| ⬜ Week 4 | Add OpenAI API           | Use OpenAI to categorize or extend todos                         |
| ⬜ Week 5 | Add voice input/reminder | Voice-to-text or TTS for task reminder feature                   |

---

## 📂 Project Structure
todo-app/
├── backend/         # Flask API
│   ├── app.py
│   └── requirements.txt
├── frontend/        # React (Vite)
│   ├── src/
│   ├── public/
│   └── ...
├── docker-compose.yml
├── .gitignore
└── README.md

---

## 🧠 What I Learned So Far
1. Docker container basics (Dockerfile, docker-compose)
2. React ↔ Flask API communication
3. Debugging Docker network issues
4. Using Vite proxy for local development
5. Structured self-learning with real-world deployment in mind

---

## 🔗 Future Plans
Once this project is fully built and deployed, it will serve as a portfolio-ready example of a real-world full-stack, dockerized, and cloud-deployable application integrated with AI.