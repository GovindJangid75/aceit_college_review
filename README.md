<div align="center">

# 🎓 Arya College Review Collector

### *A feature-rich student review & information web platform*

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

> A mini practice project built to explore frontend web development — featuring dynamic reviews, real-time UI, dark mode, and a complete college information portal for **Arya College of Engineering & IT (ACEIT), Jaipur**.

</div>

---

## 📸 Preview

| 🌞 Light Mode | 🌙 Dark Mode |
|---|---|
| Animated gradient background with white card | Deep blue-grey gradient with dark card |
| Clean, bright interface | Easy-on-the-eyes dark theme |

---

## ✨ Features

### 🎨 UI & Theme
| Feature | Description |
|---|---|
| 🌓 **Dark / Light Mode** | Toggle between themes instantly with animated transition |
| 🌈 **Animated Gradient Background** | Smooth 15s looping gradient animation using `@keyframes` |
| 📱 **Responsive Design** | Works beautifully on both desktop and mobile screens |
| 🕐 **Live Clock** | Real-time HH:MM:SS clock with date tooltip, updates every second |

### 📝 Reviews
| Feature | Description |
|---|---|
| ⭐ **Star Rating** | Click to select a 1–5 star rating before submitting |
| 📤 **Submit Review** | Posts review data to a backend API via `fetch()` |
| 📋 **Load & Display Reviews** | Fetches and renders all reviews dynamically on page load |
| 📊 **Average Rating** | Automatically calculates and displays the overall average |
| 💬 **Pre-loaded Student Reviews** | Alumni reviews with placement company and package info |

### 🏫 College Information
| Section | What's Inside |
|---|---|
| 📍 Basic Info | Location, type, established year, website |
| 📞 Contact Info | Phone, email, full address |
| 📚 Academic Info | Affiliation, accreditation, courses, REAP code |
| 🎓 B.Tech Branches | 6 branches with intake, duration & specializations |
| 💼 Placements | Stats, top recruiters, packages, process & support |
| 🏠 Hostel Facilities | Boys & girls hostels, rules & amenities |
| 🏆 Achievements | Academic, research, student & industry awards |
| ✅ Pros & Cons | Honest student-perspective pros and cons |
| ❓ Query Form | Students can submit questions (stored in `localStorage`) |

---

## 🗂️ Project Structure

```
arya-college-review/
│
├── 📄 index.html        → Page structure, college info, forms, reviews
├── 🎨 style.css         → All styling: themes, animations, responsive layout
└── ⚙️  script.js         → Theme toggle, clock, review logic, query form
```

> **Simple & clean** — No frameworks, no build tools, no dependencies.

---

## 🚀 Getting Started

### Run Locally

```bash
# 1. Clone or download the project
git clone https://github.com/your-username/arya-college-review.git

# 2. Open in browser — that's it!
open index.html
```

No npm install. No webpack. No configuration. Just open and go. 🎉

### Backend API (Optional)

The review system uses a REST API. If you have a backend running, it expects:

```
POST   /api/reviews          →  Submit a new review
GET    /api/reviews          →  Fetch all reviews
GET    /api/reviews/average  →  Get the average rating
```

**Without a backend:** The query form still works (saves to `localStorage`), and all other sections display perfectly. Only review submission/loading will fail silently.

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   HTML5  ──  Page structure, semantic elements      │
│   CSS3   ──  Animations, variables, grid/flex       │
│   JS     ──  DOM, fetch API, localStorage, timers   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**No external libraries. Pure vanilla web tech.**

---

## 🔍 Code Highlights

### 🌗 Theme Toggle
```javascript
toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleTheme.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
```
CSS variables (`--bg-color`, `--text-color`, etc.) make the entire theme switch instant.

---

### ⭐ Interactive Star Rating
```javascript
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.textContent = parseInt(s.dataset.value) <= selectedRating ? '★' : '☆';
    });
  });
});
```

---

### 🕐 Live Clock
```javascript
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
```

---

### 🌈 CSS Gradient Animation
```css
@keyframes gradientAnimation {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
}
```

---

## 🏫 About Arya College of Engineering & IT

| 📌 Detail | Info |
|---|---|
| 📍 Location | SP-42, RIICO Industrial Area, Kukas, Delhi Road, Jaipur - 302028 |
| 🏛️ Type | Private Engineering College |
| 📅 Established | 2000 |
| 🎓 Affiliated To | RTU (Rajasthan Technical University) |
| ✅ Accreditation | NAAC |
| 🌐 Website | [www.aryacollege.in](https://www.aryacollege.in) |
| 📞 Phone | 0141-6604555 |
| 📧 Email | info@aryacollege.in |

### 🎓 B.Tech Branches Covered

| Branch | Intake | Specializations |
|---|---|---|
| 💻 CSE | 120 | AI & ML, Data Science |
| 🖥️ IT | 60 | Software Dev, Networking, Cybersecurity |
| 📡 ECE | 60 | VLSI, Embedded Systems, IoT |
| ⚡ EE | 60 | Power Systems, Renewable Energy |
| ⚙️ ME | 60 | Robotics, Automation, Manufacturing |
| 🏗️ CE | 60 | Structural Design, Environmental Engg |

### 💼 Placement Snapshot

```
📊 Average Package  →  5.5 LPA
🚀 Highest Package  →  45 LPA
✅ Placement Rate   →  85%
🏢 Companies        →  200+
🌍 International    →  15% offers
```

**Top Recruiters:** TCS · Infosys · Wipro · Accenture · IBM · Microsoft · Amazon · Google · Adobe · Oracle · HCL · Capgemini · L&T · BHEL

---

## 📚 What I Learned

This project was built as a **practice mini-project** to get hands-on with:

- 🎨 CSS custom properties (variables) for theming
- 🌀 `@keyframes` animations and transitions
- 📡 JavaScript `fetch()` API for async HTTP requests
- 🗃️ `localStorage` for client-side data persistence
- ⏱️ `setInterval` for real-time UI updates
- 📐 CSS Grid and Flexbox for responsive layouts
- 🏗️ Structuring a multi-section HTML page cleanly
- 🎭 `details` / `summary` HTML elements for accordions

---

## 🔮 Possible Future Improvements

- [ ] 🔗 Connect to a real backend (Node.js / Firebase)
- [ ] 🔐 Add user authentication for reviews
- [ ] 🗂️ Filter/search reviews by branch or rating
- [ ] 📊 Add a visual rating breakdown chart
- [ ] 🌐 Deploy to GitHub Pages or Vercel

---

## 👨‍💻 Developer

<div align="center">

**Govind Jangid**
Logic & Frontend Developer

*Built with curiosity, coffee, and lots of `console.log()` 😄*

</div>

---

<div align="center">

Made with ❤️ as a mini practice project · 2024

</div>
