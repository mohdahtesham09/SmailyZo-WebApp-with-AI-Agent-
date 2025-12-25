import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset form after 3 seconds
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', phone: '', email: '', message: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Start Your Journey</h2>
                    <p className="contact-desc">
                        Ready to transform your smile? Schedule your consultation today.
                        We are accepting new patients in our Miami clinic.
                    </p>

                    <div className="info-item">
                        <span className="info-label">Location</span>
                        <span className="info-value">123 Biscayne Blvd, Miami, FL 33132</span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">Hours</span>
                        <span className="info-value">Mon - Fri: 8am - 6pm</span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">Contact</span>
                        <span className="info-value">(305) 555-0123</span>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    {status === 'success' ? (
                        <div className="success-message">
                            <h3>Thank You!</h3>
                            <p>Your appointment request has been received. We will call you shortly.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="I'm interested in veneers..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Request Appointment'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
