import styles from './FaqsContent.module.css';
import FaqsGroup from '../FaqsGroup/FaqsGroup';
import PropTypes from 'prop-types';
import useLoading from '../../../../hooks/useLoading';
import SkeletonFaq from '../SkeletonFaq/SkeletonFaq';

/**
 * Renders FAQS heading and groups.
 *
 * @returns {JSX.Element}
 */
export default function FaqsContent({ faqGroups }) {
  const { loading } = useLoading();

  return loading ? (
    <SkeletonFaq />
  ) : (
    <div className={styles['faq-content-container']}>
      <h1 className={styles['faq-heading']}>Frequently Asked Questions</h1>
      <div className={styles['groups']}>
        {faqGroups.map((faqGroup) => (
          <FaqsGroup
            key={JSON.stringify(faqGroup)}
            groupName={Object.entries(faqGroup)[0][0]}
            questionsAndAnswers={Object.entries(faqGroup)[0][1]}
          />
        ))}
      </div>
    </div>
  );
}

FaqsContent.propTypes = {
  faqGroups: PropTypes.array,
};
