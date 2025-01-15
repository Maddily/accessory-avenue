import styles from './About.module.css';
import about from '../../../../assets/images/about1.png';

/**
 * Renders about section.
 *
 * @returns {JSX.Element}
 */
export default function About() {
  return (
    <section className={styles.container}>
      <img className={styles.image} src={about} alt="phone cases" />
      <div className={styles.text}>
        <h2 className={styles['about-heading']}>About Us</h2>
        <p className={styles['about-body']}>
          Accessory Avenue offers a selection of practical and well-designed
          phone accessories. Our focus is on providing products that combine
          durability with a clean, modern look.
        </p>
      </div>
    </section>
  );
}
