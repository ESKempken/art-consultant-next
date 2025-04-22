import styles from "@/styles/MContact.module.scss";


export default function Contact() {
    return (
        <div className={styles.Contact}>
            <div className={styles.Contact__avatar}>
                <img src="assets/avatar-placeholder.jpg" alt="Photo of Caroline Field" />
                <img src="assets/logo-gold.svg" alt="Caroline Field logo" />
            </div>

            <div className={styles.Contact__address}>
                <p>
                    <a href="tel:+61432000777">+61 432 000 777</a><br />
                    <a href="mailto:">info@carolinefield.com</a>
                </p>

                <div className={styles.Contact__social}>
                    <a href="https://www.linkedin.com/in/caroline-field-147a24116" target="_blank">
                        <img className="Contact__icon" src="assets/icon_LinkedIn-gold.svg" alt="LinkedIn logo" />
                    </a>

                    <a href="https://www.instagram.com/caroline.field.art" target="_blank">
                        <img className="Contact__icon" src="assets/icon_Instagram-gold.svg" alt="Instagram logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}