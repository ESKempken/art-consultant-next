import styles from '@/styles/OSummary.module.scss';


export default function OSummary() {
    return (
        <div className={styles.CallToAction}>

            <div className={styles.CallToAction__wrapper}>
                <div className={styles.CallToAction__layout}>
                    <ul className={styles.CallToAction__services}>
                        <li>Collection Management</li>
                        <li>Exhibitions</li>
                        <li>Commissioned Projects</li>
                        <li>Art Museum Policy and Strategic Development</li>
                        <li>Commissioned Projects</li>
                        <li>Art Museum Policy and Strategic Development</li>
                        <li>Research and Writing</li>
                    </ul>

                    <div className={styles.CallToAction__contact}>
                        <a href="tel:+61432000777" aria-label="phone">+61 432 000 777</a><br />
                        <a href="mailto:" aria-label="email">info@carolinefield.com</a>
                    </div>

                    <div>
                        <p className={styles.CallToAction__callToAction}>
                            With a deep understanding of Australian art, <b>Caroline Field</b> tailors her support
                            to
                            you project. Reach out to discuss how.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}