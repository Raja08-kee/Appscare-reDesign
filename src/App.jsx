import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Framework from './pages/Framework';

// Import the new Middleware Integration component
import IntegrationServices from './components/home/IntegrationServices';
import MiddlewareServices from './components/MiddlewareServices';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative min-h-screen bg-enterprise selection:bg-connect/30 selection:text-white">

          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-connect/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sync/5 rounded-full blur-[120px]" />
          </div>

          <Header />

          <ScrollToTopButton />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <IntegrationServices />
                </>
              } />
              <Route path="/about" element={<About />} />

              {/* CHANGE THIS LINE: Removed the fragment (<> </>) and <IntegrationServices /> */}
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