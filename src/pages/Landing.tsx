import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Transformations from '../components/Transformations';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Transformations />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
