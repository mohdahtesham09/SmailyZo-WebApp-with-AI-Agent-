import { Sparkles, Smile, Star, Crown } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Sparkles size={32} />,
        title: "Teeth Whitening",
        desc: "Professional laser whitening for a brighter smile in just one visit."
    },
    {
        icon: <Smile size={32} />,
        title: "Porcelain Veneers",
        desc: "Custom-crafted veneers to transform the shape and color of your teeth."
    },
    {
        icon: <Star size={32} />,
        title: "Dental Implants",
        desc: "Permanent, natural-looking solutions for missing teeth restoration."
    },
    {
        icon: <Crown size={32} />,
        title: "Smile Makeover",
        desc: "A comprehensive treatment plan designed for your perfect smile."
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Luxury Dental Services</h2>
                    <p className="section-desc">
                        We use the latest technology and techniques to ensure comfortable,
                        effective, and beautiful results.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <a href="#contact" className="service-link">Learn more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
