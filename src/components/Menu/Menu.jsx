import styles from './Menu.module.css';
import MenuButton from '../MenuButton/MenuButton';

/**
 * Renders a menu of nav buttons.
 *
 * @returns {JSX.Element}
 */
export default function Menu() {
  return (
    <nav aria-label='menu navigation' className={styles.menu}>
      <ul className={styles['menu-buttons']}>
        <li className={styles['menu-button-container']}>
          <MenuButton value="home" path="/" />
        </li>
        <li className={styles['menu-button-container']}>
          <MenuButton value="shop" path="/" />
        </li>
      </ul>
    </nav>
  );
}
