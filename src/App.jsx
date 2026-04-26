import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import Aptitude from "./views/categories/aptitude.jsx";
import Dashboard from './views/dashboard/dashboard.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
