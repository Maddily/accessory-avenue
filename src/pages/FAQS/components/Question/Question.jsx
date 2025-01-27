import { useState } from 'react';
import Icon from '@mdi/react';
import { mdilChevronUp, mdilChevronDown } from '@mdi/light-js';
import styles from './Question.module.css';
import PropTypes from 'prop-types';

/**
 * Renders a question and an answer.
 *
 * @param {string} question - A frequently asked Question
 * @param {string} answer - The answer to the question
 * @returns {JSX.Element}
 */
export default function Question({ question, answer }) {
  const [visible, setVisible] = useState(false);

  return (
    <article className={styles.question}>
      <div className={styles['question-chevron-container']}>
        <h3 className={`${styles['question-heading']} ${visible ? styles.colored : ''}`}>{question}</h3>
        {visible && (
          <Icon
            className={styles.chevron}
            onClick={() => setVisible(!visible)}
            path={mdilChevronUp}
            size={1}
            title='Hide'
          />
        )}
        {!visible && (
          <Icon
            className={styles.chevron}
            onClick={() => setVisible(!visible)}
            path={mdilChevronDown}
            size={1}
            title='Expand'
          />
        )}
      </div>
      <p className={`${styles.answer} ${visible ? styles.visible : ''}`}>{answer}</p>
    </article>
  );
}

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
