import './Transformations.css';
import whiteningBefore from '../assets/whitening-before.png';
import whiteningAfter from '../assets/whitening-after.png';
import invisalignBefore from '../assets/invisalign-before.png';
import invisalignAfter from '../assets/invisalign-after.png';

const transformations = [
    {
        beforeImg: whiteningBefore,
        afterImg: whiteningAfter,
        desc: "Complete Smile Makeover with 8 Porcelain Veneers",
        label: "Whitening + Veneers"
    },
    {
        beforeImg: invisalignBefore,
        afterImg: invisalignAfter,
        desc: "Invisalign Treatment (6 Months)",
        label: "Orthodontics"
    }
];

const Transformations = () => {
    return (
        <section id="transformations" className="section transformations-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Real Results</span>
                    <h2 className="section-title">Smile Transformations</h2>
                </div>

                <div className="transformations-grid">
                    {transformations.map((item, index) => (
                        <div key={index} className="trans-card">
                            <div className="trans-images">
                                <div className="trans-half before">
                                    <span>Before</span>
                                    <img src={item.beforeImg} alt="Dental before" className="trans-img" />
                                </div>
                                <div className="trans-half after">
                                    <span>After</span>
                                    <img src={item.afterImg} alt="Dental after" className="trans-img" />
                                </div>
                            </div>
                            <div className="trans-info">
                                <span className="trans-label">{item.label}</span>
                                <p className="trans-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transformations;
