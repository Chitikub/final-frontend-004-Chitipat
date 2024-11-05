// src/components/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {}

      <div className="featured-box">
        <div className="featured-text">
          <h1 className="featured-name">Welcome to JewSjops</h1>
          <p className="featured-text-info">
            this website is about jewely shop assesories & ete. Hope you will
            happy
          </p>
          <div className="featured-text-btn">
            <button className="btn blue-btn">Learn More</button>
          </div>
          <div className="social_icons">
            <div className="icon">
              <i class="fi fi-brands-facebook"></i>
            </div>
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="featured-image">
          <div className="image">
            <img
              src="https://wanderlustandco.com/cdn/shop/files/Wanderlustandco_DemiFine_14KGoldVermeilChains_02_800x.jpg?v=1685502703"
              alt="featured"
            />
          </div>
        </div>
      </div>

      {}
      <div className="card-section">
        <h3>Features</h3>
        <div className="card-container">
          <div className="card">
            <i className="fas fa-cogs"></i>
            <p>
              Simple, elegant, beautiful, using diamonds obtained from Germany.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-mobile-alt"></i>
            <p>
              have any problems or questions, you can contact us 24 hours a day.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-cloud"></i>
            <p>Fast delivery, guaranteed within 7 days.</p>
          </div>
          <div className="card">
            <i className="fas fa-lock"></i>
            <p>Safe throughout transportation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
