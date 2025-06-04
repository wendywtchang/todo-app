## 🚀 Project Summary

This is a simple full-stack Todo App built using **React (Vite)** for the frontend and **Flask** for the backend. Both services are containerized using **Docker** and orchestrated with **docker-compose**.

### ✅ Week 1 Goals Completed:
- Created a Flask API that serves hardcoded todos (Chinese: 買牛奶, 寫Docker作業)
- Built a React UI that fetches and displays todos from the backend
- Wrote Dockerfiles for both frontend and backend
- Configured `vite.config.js` to proxy API requests to the backend service
- Solved `ECONNREFUSED` and `Unexpected token '<'` errors by correctly using service name `backend` instead of `localhost`
- Successfully rendered todo items via `docker-compose` setup
- Ready to extend app with database and OpenAI features in future weeks

> This project is part of a weekly DevOps learning plan focused on containerization and cloud deployment.

---

# Todo App (React + Flask + Docker)
一個簡單的待辦清單，練習前後端整合與 Docker 環境建置。

## 技術棧
- React + Vite
- Flask + Python
- Docker + docker-compose

## 如何啟動
```bash
git clone ...
docker-compose up --build
```

## debug
```bash
✅ 你今天學會的重要觀念：
Docker container 間不要用 localhost 溝通 → 要用 docker-compose 中的服務名稱（如 backend）
Vite proxy 是開發時 API 轉接的關鍵 → 沒設會導致抓不到後端資料
500 錯誤可能是後端炸了，也可能是前端 proxy 錯誤導致沒打到後端
Console log 是你 debug 最好的朋友 → React 與 Network tab 可以看到 fetch 狀況
用 docker-compose up --build 每次建構，確保改動生效
```


