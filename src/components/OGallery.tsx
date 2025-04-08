import styles from "@/styles/OGallery.module.scss";

export default function OGallery() {
    return (
        <div className={styles.Gallery} id="gallery-list">
            <div className={styles.Gallery__item}>
                <img src="../assets/gallery-placeholder_3.jpg" alt=""/>
            </div>

            <div className={styles.Gallery__item}>
                <img src="../assets/gallery-placeholder_2.jpg" alt=""/>
            </div>

            <div className={styles.Gallery__item}>
                <img src="../assets/gallery-placeholder_4.jpg" alt=""/>
            </div>
        </div>
    );
}