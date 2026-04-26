import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Grid, 
  Target, 
  BarChart2, 
  HelpCircle, 
  Trophy, 
  ShieldCheck,
  Brain,
  BookOpen,
  Code,
  Users,
  BookMarked,
  CheckCircle,
  FileText
} from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-light">
      {/* Hero Section */}
      <section className="hero-light">
        <div className="container hero-container-light">
          <div className="hero-content-light">
            <div className="badge-pill">
              <span className="badge-icon">☆</span> Your Success, Our Mission
            </div>
            
            <h1 className="hero-title-light">
              <span className="text-primary">Aptimaster</span> – Online Placement Preparation
            </h1>
            
            <p className="hero-desc-light">
              Practice Aptitude, Reasoning, Verbal Ability & Coding with smart tests and track your progress to crack your dream placement.
            </p>
            
            <div className="hero-actions-light">
              <Link to="/signup" className="btn btn-primary btn-hero">
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href="#categories" className="btn btn-outline btn-hero hero-explore">
                Explore Categories <Grid size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="hero-visual-light">
            <div className="hero-visual-mock">
               <div className="floating-badge badge-1">
                 <Target color="#6b46ff" size={24} />
                 <span>Aptitude</span>
               </div>
               <div className="floating-badge badge-2">
                 <BookOpen color="#10b981" size={24} />
                 <span>Verbal Ability</span>
               </div>
               <div className="floating-badge badge-3">
                 <Brain color="#3b82f6" size={24} />
                 <span>Reasoning</span>
               </div>
               <div className="floating-badge badge-4">
                 <Code color="#f59e0b" size={24} />
                 <span>Coding</span>
               </div>
               <div className="main-illustration-circle">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Student Illustration" className="student-illustration" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="features-row-section">
        <div className="container">
          <div className="features-row-card">
            <div className="feature-item-main">
              <div className="f-icon f-icon-purple"><Target size={24} /></div>
              <h4>Smart Practice</h4>
              <p>Topic-wise questions with detailed solutions.</p>
            </div>
            <div className="feature-item-main">
              <div className="f-icon f-icon-blue"><BarChart2 size={24} /></div>
              <h4>Track Progress</h4>
              <p>Analyze performance and improve constantly.</p>
            </div>
            <div className="feature-item-main">
              <div className="f-icon f-icon-green"><HelpCircle size={24} /></div>
              <h4>Mock Tests</h4>
              <p>Real exam-like tests to boost confidence.</p>
            </div>
            <div className="feature-item-main">
              <div className="f-icon f-icon-orange"><Trophy size={24} /></div>
              <h4>Placement Ready</h4>
              <p>Prepare effectively and get placed.</p>
            </div>
            <div className="feature-item-main">
              <div className="f-icon f-icon-pink"><ShieldCheck size={24} /></div>
              <h4>Trusted by Students</h4>
              <p>Join thousands of successful aspirants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>Prepare in Top Categories</h2>
            <p>Master every section with structured practice and tests.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card c-purple">
               <div className="c-icon-wrapper"><Target size={40} /></div>
               <h3>Aptitude</h3>
               <p>Quantitative, Data Interpretation, Arithmetic & More</p>
               <Link to="/aptitude" className="c-link">Practice Now <ArrowRight size={16} /></Link>
            </div>
            <div className="category-card c-blue">
               <div className="c-icon-wrapper"><Brain size={40} /></div>
               <h3>Reasoning</h3>
               <p>Logical, Analytical & Mental Ability Questions</p>
               <Link to="/reasoning" className="c-link">Practice Now <ArrowRight size={16} /></Link>
            </div>
            <div className="category-card c-green">
               <div className="c-icon-wrapper"><BookOpen size={40} /></div>
               <h3>Verbal Ability</h3>
               <p>Vocabulary, Grammar, Reading & More</p>
               <Link to="/verbal" className="c-link">Practice Now <ArrowRight size={16} /></Link>
            </div>
            <div className="category-card c-orange">
               <div className="c-icon-wrapper"><Code size={40} /></div>
               <h3>Coding</h3>
               <p>DSA, Algorithms, MCQs & Coding Challenges</p>
               <Link to="/coding" className="c-link">Practice Now <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-panel">
            <div className="stat-box">
              <Users size={32} className="stat-icon" />
              <div className="stat-info">
                <h3>50K+</h3>
                <p>Students</p>
              </div>
            </div>
            <div className="stat-box">
              <BookMarked size={32} className="stat-icon" />
              <div className="stat-info">
                <h3>2000+</h3>
                <p>Practice Questions</p>
              </div>
            </div>
            <div className="stat-box">
              <FileText size={32} className="stat-icon" />
              <div className="stat-info">
                <h3>300+</h3>
                <p>Mock Tests</p>
              </div>
            </div>
            <div className="stat-box">
              <Trophy size={32} className="stat-icon" />
              <div className="stat-info">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
