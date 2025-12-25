import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    // Try to open chatbot via DOM click on the toggle button
    const searchButton = document.getElementById('vg_chat_toggle');
    if (searchButton) {
      searchButton.click();
    } else {
      console.warn('Chatbot toggle button not found');
      // Fallback: contact section
      window.location.href = '#contact';
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">
            Smaily<span className="text-primary">Zo</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <a href="#services" className="nav-link">Services</a>
          <a href="#transformations" className="nav-link">Results</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>

          <button className="btn btn-primary" onClick={handleBookNow}>
            <Phone size={18} />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)} className="mobile-link">Services</a>
          <a href="#transformations" onClick={() => setIsOpen(false)} className="mobile-link">Results</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="mobile-link">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mobile-link">Contact</a>
          <button onClick={handleBookNow} className="btn btn-primary mobile-btn">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
