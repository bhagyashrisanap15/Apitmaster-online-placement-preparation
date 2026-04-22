import { Link } from 'react-router-dom';
import { ChevronDown, Triangle } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-light">
      <div className="container nav-container-light">
        <Link to="/" className="nav-brand">
          <div className="brand-logo-container">
             <Triangle className="brand-icon" size={28} fill="url(#gradient-brand)" />
             <svg width="0" height="0">
               <linearGradient id="gradient-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop stopColor="#6b46ff" offset="0%" />
                 <stop stopColor="#4aa2ff" offset="100%" />
               </linearGradient>
             </svg>
          </div>
          <div className="brand-text-container">
            <span className="brand-title">Aptimaster</span>
            <span className="brand-subtitle">Online Placement Preparation</span>
          </div>
        </Link>

        <ul className="nav-links-center">
          <li>
            <Link to="/" className="nav-link-item active">Home</Link>
          </li>
          <li>
            <div className="nav-link-item with-dropdown">
              Categories <ChevronDown size={16} />
            </div>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link-item">Dashboard</Link>
          </li>
        </ul>

        <div className="nav-actions-right">
          <Link to="/login" className="btn btn-outline nav-btn">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
             Login
          </Link>
          <Link to="/signup" className="btn btn-primary nav-btn">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
             Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
