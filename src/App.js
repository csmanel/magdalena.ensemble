import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Support } from "./components/Support";
import { SupportSummary } from "./components/SupportSummary";
import backgroundimg from "./assets/background-three.jpg"
import { GrInstagram } from 'react-icons/gr';
import { GrFacebook } from 'react-icons/gr';
import { GrPaypal } from 'react-icons/gr';

// import { Media } from "./components/Media";
// import { Upcoming } from "./components/Upcoming";

function App() {
  const isRoot = '/' === window.location.pathname 
  console.log(isRoot)

  return (
    <div className="landing">
      <Navbar />
      <div className="landing-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route path="support-summary" element={<SupportSummary />} />
        </Routes>
      </div>
      <div className="footer-container">
          <div className="footer-text">
            <p>magdalena.ensemble@gmail.com</p>
          </div>
          <div className="footer-links">
              <a target="_blank" rel="noreferrer" href='https://www.instagram.com/magdalena.ensemble/' className="footer-icons">
                <GrInstagram />
              </a>
              <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100094669223925'className="footer-icons">
                <GrFacebook />
              </a>
          </div>
      </div>
      <img src={backgroundimg} className={`background-wrapper ${isRoot ? '' : 'unfocused'}`} alt=""/>
    </div>
  );
}

export default App;
