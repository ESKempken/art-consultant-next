import styles from "@/styles/MNav.module.scss";
import AIcon from "./AIcon";

export default function MNav({showNav}: {showNav: boolean}) {

    if (!showNav) return;

    return (
        <nav className={styles.Navbar}>
            <h3>/<em> Caroline Field</em></h3>

            <a href="#top">
                <AIcon name="arrow" color='dark' hover="blue" />
            </a>
        </nav>
    )
}