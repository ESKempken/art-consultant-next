import styles from "@/styles/MNav.module.scss";

export default function MNav({showNav}: {showNav: boolean}) {

    if (!showNav) return;

    return (
        <nav className={styles.Navbar}>
            <h3>/<em> Caroline Field</em></h3>

            <a href="#top">
                <img src="../assets/icon-arrow-black.svg" alt="scroll to top" />
            </a>
        </nav>
    )
}