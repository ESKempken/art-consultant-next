import styles from "@/styles/MContact.module.scss";
import AIcon from "./AIcon";


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
                        <AIcon name="linkedin" color='gold' hover="blue" />
                    </a>

                    <a href="https://www.instagram.com/caroline.field.art" target="_blank">
                        <AIcon name="instagram" color='gold' hover="blue" />
                    </a>
                </div>
            </div>
        </div>
    );
}