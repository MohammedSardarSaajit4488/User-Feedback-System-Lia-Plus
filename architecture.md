# 🏗️ Architecture & Flow – User Feedback System

This document explains the full architecture, flow, and structure of the User Feedback System built for the Lia Plus SDE1 assignment.

---

## 🧱 1. Tech Stack Overview

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React, Axios, HTML, CSS        |
| Backend     | Node.js, Express               |
| Database    | MongoDB Atlas (Cloud)          |
| Dev Tooling | Visual Studio Code, Concurrently |

---

## 🧭 2. Application Flow

[User] → fills feedback form →
[React App] → sends POST request →
[Express Server] → saves to MongoDB Atlas →
[Dashboard] → fetches data via GET →
[Frontend] displays grouped feedbacks


1. User enters Name, Email, Feedback, and selects a Category
2. React sends the form data via Axios to Express backend (`/feedback`)
3. Backend saves the feedback into the `feedbacks` collection on MongoDB Atlas
4. Dashboard fetches all feedbacks using GET request to `/feedback`
5. Feedbacks are grouped by type (Suggestion, Bug Report, Feature Request)
6. User can delete feedbacks via DELETE `/feedback/:id`

---

## 🗂️ 3. Folder Structure

user-feedback-system/
├── backend/
│ ├── server.js # Entry point
│ ├── routes/ # API endpoints
│ ├── models/ # Mongoose schema
│ └── config/ # MongoDB connection
│
├── frontend/
│ └── src/
│ ├── App.js
│ ├── App.css
│ └── components/
│ ├── FeedbackForm.js
│ └── FeedbackDashboard.js
│
├── .vscode/ # Optional VS Code task
├── package.json # Combined start script
├── README.md
└── architecture.md # This file


---

## 🔁 4. API Endpoints

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| GET    | /feedback        | Get all feedbacks           |
| POST   | /feedback        | Submit a new feedback       |
| DELETE | /feedback/:id    | Delete a feedback by ID     |

---

## 🧩 5. Component Breakdown

### 🔹 `FeedbackForm.js`
- Controlled form input for name, email, feedback text, and category
- On submit, calls POST API and resets form
- Notifies parent to refresh dashboard

### 🔹 `FeedbackDashboard.js`
- Fetches all feedbacks from backend
- Groups feedback by category
- Renders each as a card
- Delete button removes item and updates UI

---

## 🧠 6. Architecture Style

- Modular MVC-style backend
- Component-based frontend using React Hooks
- Auto-refresh flow via state lifting (`refresh` state)
- One-click startup using `concurrently`
- Environment-safe config with `.env` file for MongoDB

---

## 🎁 7. Bonus Features

- Dashboard grouped by feedback category
- Auto-refresh after submission
- One-click delete functionality
- Clean, responsive UI
- One-command full stack startup (`npm start`)

---

## ✅ Summary

This project demonstrates full-stack skills with clean separation of concerns, real-time UI updates, and professional folder structure. It is fully ready for production usage and scalable extensions like authentication or admin panel.