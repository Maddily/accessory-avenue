import Icon from '@mdi/react';
import { mdiStar, mdiStarHalfFull, mdiStarOutline } from '@mdi/js';
import PropTypes from 'prop-types';

/**
 * Renders 5 stars filled based on the given rating.
 *
 * @param {number} rating - A product's rating
 * @param {string} title - A product's title
 * @returns {JSX.Element}
 */
export default function Stars({ rating, title }) {
  let rtng = rating;

  const ratingArray = [0, 0, 0, 0, 0].map((x) => {
    if (rtng >= 1) {
      rtng -= 1;
      return 1;
    }

    if (rtng > 0) {
      rtng -= rtng;
      return 0.5;
    }

    return x;
  });

  return (
    <>
      {ratingArray.map((x, i) => {
        switch (x) {
          case 1:
            return (
              <Icon
                color='gold'
                key={i + title}
                path={mdiStar}
                size={0.9}
              />
            );
          case 0.5:
            return <Icon color='gold' key={i + title} path={mdiStarHalfFull} size={0.9} />;
          default:
            return <Icon key={i + title} path={mdiStarOutline} size={0.9} />;
        }
      })}
    </>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string,
};
