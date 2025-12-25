import './Hero.css';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-smile.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge fade-in">
                        <BadgeCheck size={16} />
                        <span>Top Rated Cosmetic Dentist in Miami</span>
                    </div>

                    <h1 className="hero-title fade-in-up">
                        Design Your <br />
                        <span className="text-primary">Perfect Smile</span>
                    </h1>

                    <p className="hero-subtitle fade-in-up delay-1">
                        Experience world-class cosmetic dentistry in a calming, luxury environment.
                        We blend art and science to create smiles that change lives.
                    </p>

                    <div className="hero-actions fade-in-up delay-2">
                        <button className="btn btn-primary btn-lg">
                            Book Consultation
                        </button>
                        <button className="btn btn-outline btn-lg">
                            View Transformations <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="hero-trust fade-in-up delay-3">
                        <div className="trust-item">
                            <span className="trust-number">5k+</span>
                            <span className="trust-label">Smiles Crafted</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">4.9/5</span>
                            <span className="trust-label">Google Rating</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">15+</span>
                            <span className="trust-label">Years Experience</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual fade-in delay-2">
                    {/* Pulsing background circle */}
                    <div className="visual-circle"></div>

                    <div className="visual-image-wrapper">
                        <img src={heroImage} alt="Confidently smiling woman showing perfect teeth" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
