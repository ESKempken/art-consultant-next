import styles from '@/styles/OServices.module.scss';


export default function Services() {
    return (
        <div className={styles.Services}>

            <h2 className={styles.Services__title}>
                Expertise
            </h2>

            <p className={styles.Services__about}>
                With years of experience in the art world, I assist collectors and institutions in building meaningful collections through expert consultation, valuation, and curatorial services.
            </p>

            <hr data-size="xl" />

            <ul className={styles.Services__list}>
                <li>
                    <h3>Collection Valuation</h3>
                    <p>Accurate assessment of artworks for insurance, sale, and estate planning, ensuring informed decision-making based on market trends and historical significance.</p>
                </li>
                <li>
                    <h3>Collection Research</h3>
                    <p>In-depth research and documentation to establish provenance, authenticity, and historical context for artworks in private and institutional collections.</p>
                </li>
                <li>
                    <h3>Curatorial Assessment</h3>
                    <p>Professional evaluation of collections to enhance their cultural and financial value, with recommendations for conservation and exhibition planning.</p>
                </li>
                <li>
                    <h3>Significance & Development</h3>
                    <p>Strategic guidance on the long-term development of art collections, including acquisitions, deaccessioning, and institutional partnerships.</p>
                </li>
                <li>
                    <h3>Collection Management</h3>
                    <p>Comprehensive collection care, including cataloging, storage solutions, and risk management for private and corporate collectors.</p>
                </li>
                <li>
                    <h3>Contemporary Exhibition</h3>
                    <p>Curating and managing contemporary art exhibitions, from concept development to installation and audience engagement.</p>
                </li>
                <li>
                    <h3>Concept, Design & Catalogue</h3>
                    <p>Development of exhibition concepts, visual presentation strategies, and professionally designed catalogs that enhance the narrative of art collections.</p>
                </li>
                <li>
                    <h3>Presentation</h3>
                    <p>Expert guidance on displaying and promoting art collections, including museum-quality framing, lighting, and interpretive materials.</p>
                </li>
                <li>
                    <h3>To Your Needs</h3>
                    <p>All types of consultation are tailored to your needs.</p>
                </li>
            </ul>
        </div>
    )
}