# Job Application Tracker

A clean and interactive web application to track job applications efficiently. Users can manage job statuses, filter applications, and monitor progress through a simple and responsive interface.

---

## 🌐 Live Demo
👉 https://shoyon-at-git.github.io/B13-Assignment-4-job-application-tracker/

---

## 📌 Project Overview

This project helps users organize their job applications in one place. Instead of losing track across multiple tabs or notes, users can easily update application status, filter results, and monitor progress dynamically.

Job tracking tools like this are widely used to manage applications, track progress, and stay organized during job hunting. :contentReference[oaicite:0]{index=0}

---

## 🚀 Features

- 📊 Real-time counters (Total, Interview, Rejected)
- 🎯 Update job status dynamically
- 🔍 Filter jobs by category (All / Interview / Rejected)
- ❌ Delete job cards instantly
- ⚡ No page reload (fully dynamic using JavaScript)
- 📱 Responsive UI using Tailwind CSS

---

## 🧠 How It Works

- Initially, all jobs are displayed
- JavaScript calculates total jobs automatically
- Clicking **Interview** or **Rejected** updates the status
- Counters update instantly based on actions
- Filters show only selected job categories
- Delete removes the job and updates counts dynamically

---

## 🛠️ Technologies Used

- HTML5
- JavaScript (DOM Manipulation)
- Tailwind CSS

---

## 📂 Project Structure

```bash
B13-Assignment-4-job-application-tracker/
│
├── assets/
│   ├── jobs.png
│   └── delete.png
│
├── scripts/
│   └── script.js
│
├── index.html
├── tailwind.config.js
└── README.md
