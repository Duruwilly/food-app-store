import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>Opening Hours</h3>
            <p>Monday-Thursday</p>
            <span>8:00 AM-9:00 PM</span>

            <p>Friday-Saturday</p>
            <span>10:00 AM-9:00 PM</span>

            <p>Sunday</p>
            <span>4:00 PM-11:00 PM</span>
          </div>

          <div className="footer-box">
            <h3>Follow us</h3>
            <a href="#">Facebook</a>
            <a href="https://twitter.com/PrincewillDuruU">Twitter</a>
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