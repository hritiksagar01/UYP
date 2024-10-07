import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all the pages created, stored in the 'components' folder
import UYM2 from './components/UYM2';
import UYM from './components/UYM';
import Members from './components/Members';
import Photos from './components/Photos';
import Videos from './components/Videos';
import News from './components/News';
import Support from './components/Support';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import About from './components/About';
import Contact from './components/Contact';
import Refund from './components/Refund';

function Layout({ children }) {
  const location = useLocation();
  
  // Define paths where the Navbar should be hidden
  const hideNavbarPaths = ['/register'];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  // Set dynamic document title based on route
  useEffect(() => {
    const titles = {
      '/': 'Home - My App',
      '/register': 'Register - My App',
      '/uym2': 'UYM 2.0 - My App',
      '/uym': 'UYM - My App',
      '/members': 'Members - My App',
      '/photos': 'Photos - My App',
      '/videos': 'Videos - My App',
      '/news': 'News - My App',
      '/support': 'Support - My App',
    };

    document.title = titles[location.pathname] || 'My App';
  }, [location]);

  return (
    <>
      {!hideNavbar && <Navbar />}  {/* Conditionally render Navbar */}
      {children}  {/* Render the main content (Routes) */}
      <Footer />  {/* Render Footer */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Content Route */}
          <Route path="/" element={<MainContent />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />

          {/* UYM 2.0 Page */}
          <Route path="/uym2" element={<UYM2 />} />

          {/* UYM Page */}
          <Route path="/uym" element={<UYM />} />

          {/* Members Page */}
          <Route path="/members" element={<Members />} />

          {/* Photos Page */}
          <Route path="/photos" element={<Photos />} />

          {/* Videos Page */}
          <Route path="/videos" element={<Videos />} />

          {/* News Page */}
          <Route path="/news" element={<News />} />

          {/* Support Page */}
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
