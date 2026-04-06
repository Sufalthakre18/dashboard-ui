# 📊 Learning Dashboard

This is a simple full-stack style dashboard built using Next.js and Tailwind CSS.
It allows users to view courses, track progress, and see a leaderboard.

---

## 🚀 Live Demo

🔗 [https://dashboard-ui-tawny-two.vercel.app/](https://dashboard-ui-tawny-two.vercel.app/)

---

## 📂 GitHub Repository

🔗 [https://github.com/Sufalthakre18/dashboard-ui](https://github.com/Sufalthakre18/dashboard-ui)

---

## 🎥 Demo Video

🔗 [https://drive.google.com/file/d/1a2msuOeyM9EE8L29qZl72u9fFkbZ23jI/view?usp=sharing](https://drive.google.com/file/d/1a2msuOeyM9EE8L29qZl72u9fFkbZ23jI/view?usp=sharing)

---

## 🛠️ Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS

---

## ✨ Features

* 📌 Dashboard with stats (users, points, completed courses)
* 🏆 Leaderboard with rank and medals
* 👆 Click on leaderboard row to view user details in modal
* 📚 Courses page with cards
* 🔍 Category filtering
* 📊 Progress bar for each course
* 📄 PDF viewer modal for course content
* ❌ Close modal by clicking outside
* ⚠️ Empty state handling (no courses found)

---

## 🧠 How it Works

* Data is stored as local dummy JSON (courses & leaderboard)
* Components are reusable (StatCard, CourseCard, LeaderboardTable, etc.)
* State is managed using `useState`
* Filtering is done using array methods
* Modals are controlled using conditional rendering

---

## 📁 Folder Structure (simplified)

```
app/
  ├── page.js (Home)
  ├── dashboard/
  ├── courses/
components/
  ├── Navbar.js
  ├── StatCard.js
  ├── CourseCard.js
  ├── LeaderboardTable.js
  ├── PdfViewer.js
data/
  ├── courses.js
  ├── leaderboard.js
```

---

## ⚙️ Installation

```bash
git clone https://github.com/Sufalthakre18/dashboard-ui.git
cd dashboard-ui
npm install
npm run dev
```

---

## 📌 Notes

* This project uses dummy data for simplicity
* It is structured in a way that APIs can be inte
