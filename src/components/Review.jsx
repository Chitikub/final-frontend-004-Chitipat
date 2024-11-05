import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  // ฟังก์ชันสำหรับส่งรีวิว
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && review) {
      const newReview = {
        id: reviews.length + 1,
        name,
        review,
      };

      setReviews([...reviews, newReview]);
      setName("");
      setReview("");
    } else {
      alert("Please enter both name and review");
    }
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>

      {/* Form สำหรับเพิ่มรีวิว */}
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>

      {/* ส่วนแสดงรีวิวจากลูกค้า */}
      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="review-item">
              <h4 className="review-name">{r.name}</h4>
              <p className="review-text">{r.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;
