import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton'; // Import it
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Framework from './pages/Framework';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="relative min-h-screen bg-white">
        <Header />
        
        {/* ADD IT HERE: It will sit on top of all pages */}
        <ScrollToTopButton />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/framework" element={<Framework />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;