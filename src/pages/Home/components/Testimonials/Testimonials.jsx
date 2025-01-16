import styles from './Testimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';

/**
 * Renders about section.
 *
 * @returns {JSX.Element}
 */
export default function Testimonials() {
  return (
    <section aria-label='testimonial section' className={styles.container}>
      <h2 className={styles.heading}>what our customers say</h2>
      <div aria-label='testimonials container' className={styles.testimonials}>
        <Testimonial
          review="Amazing quality and fast shipping!"
          customerName="Alex R."
        />
        <Testimonial
          review="Stylish and durable accessories!"
          customerName="Jordan M."
        />
        <Testimonial
          review="Great prices and lasting products!"
          customerName="Taylor S."
        />
      </div>
    </section>
  );
}
