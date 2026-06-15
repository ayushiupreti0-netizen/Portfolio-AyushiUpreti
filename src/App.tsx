import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import TCCICaseStudy from './pages/TCCICaseStudy';
import BankCaseStudy from './pages/BankCaseStudy';
import KCEDCCaseStudy from './pages/KCEDCCaseStudy';
import DCCCaseStudy from './pages/DCCCaseStudy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'work':
        return <Work onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'tcci':
        return <TCCICaseStudy onNavigate={setCurrentPage} />;
      case 'bank':
        return <BankCaseStudy onNavigate={setCurrentPage} />;
      case 'kcedc':
        return <KCEDCCaseStudy onNavigate={setCurrentPage} />;
      case 'dcc':
        return <DCCCaseStudy onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div ref={scrollRef} className="h-screen overflow-y-auto overflow-x-hidden bg-primary text-secondary">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
