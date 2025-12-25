import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        Smaily<span className="text-primary-light">Zo</span>
                    </div>
                    <p className="footer-desc">
                        Premium cosmetic dentistry in the heart of Miami.
                        Designing smiles that inspire confidence.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Sitemap</h4>
                    <a href="#">Home</a>
                    <a href="#services">Services</a>
                    <a href="#transformations">Results</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-links">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Accessibility</a>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} SmailyZo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
