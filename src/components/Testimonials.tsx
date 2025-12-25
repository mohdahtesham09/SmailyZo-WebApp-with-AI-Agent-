import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Model",
        text: "The porcelain veneers completely transformed my confidence. SmailyZo isn't just a clinic; it's an experience.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Entrepreneur",
        text: "Professional, efficient, and painless. The team made me feel comfortable from the moment I walked in.",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Teacher",
        text: "I was nervous about extensive work, but the results speak for themselves. Best dental experience in Miami!",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="about" className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">Stories of Transformation</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">
                                <Quote size={40} />
                            </div>
                            <div className="testimonial-stars">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" className="text-yellow-500" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.name[0]}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{item.name}</h4>
                                    <span className="author-role">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
