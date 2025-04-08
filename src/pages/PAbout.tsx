import styles from "@/styles/PAbout.module.scss";

// Components 
import OInfo from "@/components/OInfo";
import OGallery from "@/components/OGallery";
import OServices from "@/components/OServices";


export default function About() {
  return (
    <div>
        <div id="frame-container"></div>

        <main>
            
            <section className={styles.Splash}>
                <OInfo/>
                <OGallery/>
            </section>
            
            <section>
                <OServices/>
            </section>
    
            <section>
                <div id="navbar-container"></div>
                <div id="action-container"></div>
                <div id="footer-container"></div>
            </section>

        </main>
    </div>
  );
}