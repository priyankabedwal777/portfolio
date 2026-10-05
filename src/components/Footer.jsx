import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">✨ Priyanka</span>
          <p className="footer-tagline">Turning caffeine into beautiful code</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          <a href="mailto:priyanka@example.com" className="footer-social">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with 💜 &amp; ☕ · Free to use &amp; remix · Ping me if you need help!</p>
      </div>
    </footer>
  );
};

export default Footer;
