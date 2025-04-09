import styles from "@/styles/MNav.module.scss";

export default function MNav() {

    return (
        <nav className={styles.Navbar} hidden>
            <h3>/<em> Caroline Field</em></h3>

            <a href="#top">
                <img src="../assets/icon-arrow-black.svg" alt="scroll to top" />
            </a>
        </nav>
    )
}