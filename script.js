// Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleTheme.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Review Form
const reviewForm = document.getElementById('reviewForm');
const stars = document.querySelectorAll('#stars span');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.textContent = parseInt(s.dataset.value) <= selectedRating ? '★' : '☆';
    });
  });
});

// Submit Review
reviewForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (!selectedRating) {
    alert('Please select a rating');
    return;
  }

  const reviewData = {
    studentName: document.getElementById('studentName').value,
    rating: selectedRating,
    review: document.getElementById('reviewText').value
  };

  try {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    if (response.ok) {
      alert('Review submitted successfully!');
      reviewForm.reset();
      stars.forEach(s => s.textContent = '☆');
      selectedRating = 0;
      loadReviews();
    } else {
      throw new Error('Failed to submit review');
    }
  } catch (error) {
    alert('Error submitting review: ' + error.message);
  }
});

// Load Reviews
async function loadReviews() {
  try {
    const [reviewsResponse, averageResponse] = await Promise.all([
      fetch('/api/reviews'),
      fetch('/api/reviews/average')
    ]);

    const reviews = await reviewsResponse.json();
    const { average } = await averageResponse.json();

    // Update average rating
    const averageRatingDiv = document.getElementById('averageRating');
    averageRatingDiv.innerHTML = `
      <h3>Average Rating: ${average.toFixed(1)} ⭐</h3>
    `;

    // Update reviews list
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <h4>${review.studentName}</h4>
          <div class="review-rating">
            ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
          </div>
        </div>
        <p class="review-text">${review.review}</p>
        <small class="review-date">${new Date(review.date).toLocaleDateString()}</small>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading reviews:', error);
  }
}

// Load reviews when page loads
loadReviews();

// Query Form Handling
document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const queryData = {
    name: document.getElementById('queryName').value,
    email: document.getElementById('queryEmail').value,
    subject: document.getElementById('querySubject').value,
    message: document.getElementById('queryMessage').value,
    date: new Date().toISOString()
  };

  // Store query in localStorage
  let queries = JSON.parse(localStorage.getItem('queries') || '[]');
  queries.push(queryData);
  localStorage.setItem('queries', JSON.stringify(queries));

  // Show success message
  alert('Thank you for your query! We will get back to you soon.');
  
  // Reset form
  this.reset();
});

// Clock Function
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  
  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Format date as DD/MM/YYYY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  
  // Update clock display
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  clockElement.title = `${day}/${month}/${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
// Initial call to avoid delay
updateClock();
