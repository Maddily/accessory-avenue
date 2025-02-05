import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './ContactDetail.module.css';

/**
 * Renders a piece of contact detail contaning an icon,
 * a label (for accessibility) and contact data (EX: address).
 *
 * @param {string} iconPath - The path of the icon.
 * @param {string} label - The label of a piece of contact detail.
 * @param {string} data - The contact detail.
 * @returns {JSX.Element}
 */
export default function ContactDetail({ iconPath, label, data }) {
  return (
    <div className={styles['contact-detail']}>
      <div className={styles['icon-and-label']}>
        <Icon aria-hidden="true" path={iconPath} size={0.7} />
        <h4 className={styles['contact-detail-heading']}>{label}</h4>
      </div>
      <p className={styles.data} aria-label={label}>
        {data}
      </p>
    </div>
  );
}

ContactDetail.propTypes = {
  iconPath: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.string,
};
