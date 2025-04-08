import Contact from "./MContact";
import styles from "@/styles/OInfo.module.scss";


export default function Info() {
  return (
    <div className={styles.About}>

      <div className={styles.About__title}>
        <h1>Caroline Field</h1>
        <h2>Art Consultant</h2>
        <hr data-size="lg" />
      </div>

      <div className={styles.About__about}>
        <h2>Bio</h2>
        <p>I have extensive knowledge of Australian art and am actively involved in its assessment, documentation, valuation, and presentation. I specialize in collection management, exhibitions, commissioned projects, and curatorial strategy. With a strong academic background and decades of experience, I provide expert guidance to collectors, institutions, and the arts sector.</p>
        <hr data-size="xl" />
      </div>

      <Contact/>

    </div>
  );
}