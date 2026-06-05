# Arya College Review Collector 

A comprehensive web-based platform designed to collect, display, and manage student reviews for Arya College of Engineering & IT, Jaipur. Built as part of a hackathon project, this website aims to help prospective students make well-informed decisions about the college by providing transparent, student-driven insights. 

---

##  Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Data Storage](#-data-storage)
- [API Requirements](#-api-requirements)
- [Screenshots](#-screenshots)
- [Team](#-team)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

##  Features 

| Category | Features |
|----------|----------|
| College Information | Complete college profile, courses, accreditation, contact info, facilities, and hostel details |
| Reviews & Ratings | Star-based rating system, student review submission, average rating calculation, and review listing |
| Placements | Placement statistics, top recruiters, recruitment process, packages, and support |
| Student Insights | Verified student reviews, pros & cons, achievements, and alumni outcomes |
| User Experience | Dark/light theme toggle, responsive design, animated gradient background, and live clock |
| Queries | Student query form with subject categorization, stored locally for follow-up |
| Accessibility | Clean UI, mobile-first responsive layout, and semantic HTML | 

---

##  Tech Stack 

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS variables, responsive grid/flexbox, animations, and theme support
- **Client-side Storage:** `localStorage` (for query submissions)
- **Backend (Required):** REST API for handling reviews (see [API Requirements](#-api-requirements))

---

##  Project Structure 

```text
.
├── index.html      # Main landing page with all college info, forms, and reviews
├── style.css       # All styles, theme variables, responsive rules, and animations
├── script.js       # Core logic: theme, clock, ratings, reviews, queries
└── README.md       # Project documentation
```

---

##  Getting Started 

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A backend server to handle review submissions and retrieval _(required for full functionality)_

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/arya-college-review-collector.git
   cd arya-college-review-collector
   ```

2. Start a local backend server that implements the required API endpoints (see below).

3. Open `index.html` in your browser:

   ```bash
   open index.html
   # or
   python3 -m http.server 5500
   ```

> **Note:** Without a backend, review submission and average rating loading will fail, but the static content, theme toggle, clock, and query form (using localStorage) will still work.

---

##  Usage Guide 

1. **Explore College Info:** Browse courses, placements, hostels, facilities, achievements, and pros/cons.
2. **Submit a Review:**
   - Enter your name
   - Select a star rating (1–5)
   - Write your honest review
   - Click `Submit Review` to post it
3. **View Reviews:** See all submitted reviews and the dynamically calculated average rating.
4. **Ask a Question:** Submit a query under Admission, Courses, Hostel, Placements, or Other. Queries are saved in your browser's `localStorage`.
5. **Toggle Theme:** Switch between light and dark mode using the `🌙/☀️` button.
6. **Track Time:** View the live clock in the header.

---

##  Data Storage 

| Data Type | Storage Method | Notes |
|----------|--------------|------|
| Student Reviews | Backend API (`/api/reviews`) | Persisted server-side. Required for persistence across devices. |
| Average Rating | Backend API (`/api/reviews/average`) | Computed server-side or aggregated. |
| Student Queries | `localStorage` | Stored locally in the user's browser. Not shared across devices or users. |

---

##  API Requirements 

The frontend expects the following REST API endpoints to be available: 

| Endpoint | Method | Description | Request Body | Response |
|----------|--------|-------------|--------------|----------|
| `/api/reviews` | `GET` | Fetch all reviews | _None_ | Array of review objects |
| `/api/reviews` | `POST` | Submit a new review | `{ "studentName": string, "rating": number, "review": string }` | `{ success: true, ... }` or created review |
| `/api/reviews/average` | `GET` | Get average rating | _None_ | `{ "average": number }` |


### Example Review Object

```json
{
  "studentName": "Rahul Sharma",
  "rating": 5,
  "review": "Excellent placements and faculty!",
  "date": "2025-10-31T12:34:56.000Z"
}
```

---

##  Team 

| Member | Role | Contribution |
|--------|------|--------------|
| **Govind Jangid** | Logic Developer | Core application logic, form handling, rating system, and API integration |
| _Other Team Members_ | UI/UX, Design, Content | Styling, content curation, and college data structuring | 

This project was developed with ❤️ during a hackathon to improve transparency in college reviews.

---

##  Future Improvements 

- [ ] Implement user authentication for verified student reviews
- [ ] Add review moderation and spam filtering
- [ ] Add pagination, filtering, and sorting for reviews
- [ ] Migrate queries to a backend database
- [ ] Add charts for rating distribution and placement trends
- [ ] Enable image uploads for student profiles or campus photos
- [ ] Implement PWA support for offline access
- [ ] Add email notifications for query responses

---

##  License 

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, modify, and contribute! 

---

**Made for students, by students.** If you find this helpful, please consider giving it a star!
