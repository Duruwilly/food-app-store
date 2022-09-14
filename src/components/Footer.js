import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>Opening Hours</h3>
            <p>Monday-Thursday</p>
            <span>9:00 AM-9:00 PM</span>

            <p>Friday-Saturday</p>
            <span>10:00 AM-9:00 PM</span>

            <p>Sunday</p>
            <span>4:00 PM-11:00 PM</span>
          </div>

          <div className="footer-box">
            <h3>Contact Info</h3>
            <a href="#">+234-9034-031-589</a>
            <a href="#">+234-9034-031-589</a>
            <a href="#">
              duruprincewilluzochukwu
              <br />
              @gmail.com
            </a>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Review</a>
            <a href="#">Order</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-box">
            <h3>Follow us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </section>
      <div className="credit">
        &copy; copyright 2022 by <span>Princewill Duru</span>
      </div>
    </>
  );
}

export default Footer