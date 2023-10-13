import React from "react";
import Image from "next/image";

const Footer = () => {
   return (
      <footer>
         <div className="footer-content">
            <div className="profile">
               {/* <img src="your-profile-pic.jpg" alt="Your Name" /> */}
            </div>
            <div className="introduction">
               <p>
                  <span className="animated-text">
                     I am passionate about turning ideas into reality.
                  </span>
                  <br />
                  <span className="sub-text">
                     Let's collaborate and bring your vision to life.
                  </span>
               </p>
               <a
                  href="https://www.yourportfolio.com"
                  className="portfolio-link"
               >
                  Explore My Portfolio
               </a>
            </div>
         </div>
         <div class="contact-info">
            <p>Email: youremail@example.com</p>
            <p>Connect with me:</p>
            <ul class="social-media-links">
               <li>
                  <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a>
               </li>
               <li>
                  <a href="https://github.com/yourusername">GitHub</a>
               </li>
            </ul>
         </div>
         <div class="copyright">
            <p>&copy; 2023 Your Name</p>
            <a href="/privacy-policy">Privacy Policy</a>
         </div>
         <button class="back-to-top">Back to Top</button>
      </footer>
   );
};

export default Footer;
