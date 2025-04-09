import styles from "@/styles/MCredits.module.scss";

export default function MCredits() {

    return (
        <footer className={styles.Credits}>
            <a
                href="https://github.com/ESKempken/art-consultant"
                className={styles.Credits__footNotes}
            >Developed by Ellis Kempken, 2025.</a>
        </footer>
    )
}