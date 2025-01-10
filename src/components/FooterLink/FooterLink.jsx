import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './FooterLink.module.css';

/**
 * Renders a link.
 *
 * @param {string} value - The link's text content
 * @param {string} path - The path which the link needs
 * @returns {JSX.Element}
 */
export default function FooterLink({ value, path }) {
  return (
    <Link className={styles['footer-link']} to={path}>
      {value}
    </Link>
  );
}

FooterLink.propTypes = {
  value: PropTypes.string,
  path: PropTypes.string,
};
