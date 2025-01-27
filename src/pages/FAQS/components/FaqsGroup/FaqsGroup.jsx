import PropTypes from 'prop-types';
import styles from './FaqsGroup.module.css';
import Question from '../Question/Question';

/**
 * Renders a group of questions and answers with one heading.
 *
 * @param {string} groupName - The name of the question/answer group
 * @returns {JSX.Element}
 */
export default function FaqsGroup({ groupName, questionsAndAnswers }) {
  return (
    <div className={styles['group']}>
      <h2 className={styles['group-heading']}>{groupName}</h2>
      {questionsAndAnswers.map((questionAndAnswer) => (
        <Question
          key={questionAndAnswer.question}
          question={questionAndAnswer.question}
          answer={questionAndAnswer.answer}
        />
      ))}
    </div>
  );
}

FaqsGroup.propTypes = {
  groupName: PropTypes.string,
  questionsAndAnswers: PropTypes.array,
};
