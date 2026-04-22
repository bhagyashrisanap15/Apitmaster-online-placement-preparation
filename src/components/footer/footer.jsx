import { Link } from 'react-router-dom';
import { Triangle, Send } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container footer-container-dark">
        <div className="footer-top-dark">
          
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-icon-circle">
                 <Triangle size={20} fill="#6b46ff" stroke="#6b46ff" className="f-icon-rotate" />
              </div>
              <span className="footer-brand-name">Aptimaster</span>
            </Link>
            <p className="footer-brand-subtitle">Online Placement Preparation</p>
            <p className="footer-desc-text">
              Aptimaster helps students prepare smarter for placement tests with high-quality practice, mock tests, and performance analytics.
            </p>
            <div className="footer-socials">
               <a href="#" className="social-circle c-fb" style={{textDecoration: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 'bold'}}>FB</a>
               <a href="#" className="social-circle c-tw" style={{textDecoration: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 'bold'}}>TW</a>
               <a href="#" className="social-circle c-ln" style={{textDecoration: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 'bold'}}>LI</a>
            </div>
          </div>
          
          <div className="footer-links-col">
             <h4 className="footer-col-title">Quick Links</h4>
             <ul className="footer-nav-list">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/categories">Categories</Link></li>
               <li className="sub-link"><Link to="/aptitude">Aptitude</Link></li>
               <li className="sub-link"><Link to="/reasoning">Reasoning</Link></li>
               <li className="sub-link"><Link to="/verbal">Verbal Ability</Link></li>
               <li className="sub-link"><Link to="/coding">Coding</Link></li>
               <li><Link to="/dashboard">Dashboard</Link></li>
             </ul>
          </div>
          
          <div className="footer-links-col">
             <h4 className="footer-col-title">Important Pages</h4>
             <ul className="footer-nav-list">
               <li><Link to="/results">Results</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/signup">Signup / Login</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/categories">Categories</Link></li>
             </ul>
          </div>

          <div className="footer-newsletter">
             <h4 className="footer-col-title">Stay Updated</h4>
             <p className="newsletter-text">Subscribe to our newsletter and get the latest updates and tips.</p>
             <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="btn btn-primary newsletter-btn">
                  <Send size={16} className="mr-2" /> Subscribe
                </button>
             </div>
          </div>
          
        </div>
        
        <div className="footer-bottom-dark">
          <p>&copy; {new Date().getFullYear()} Aptimaster. All rights reserved.</p>
          <p>Made with ❤️ for your success</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
