import { ButtonContentWrapper, ShowMore } from './styled';
import { useState } from 'react';
import { Arrow } from '../Arrow';
import PropTypes from 'prop-types';

export const ShowMoreBiography = ({ biography }) => {
  const [showMore, setShowMore] = useState(false);

  return biography.length > 500 ? (
    <>
      {showMore ? biography : `${biography.slice(0, 500)}...`}
      <ShowMore onClick={() => setShowMore(!showMore)}>
        <ButtonContentWrapper>
          <span>{showMore ? 'Show less' : 'Show more'}</span>
          <Arrow showMore={showMore} />
        </ButtonContentWrapper>
      </ShowMore>
    </>
  ) : (
    <>{biography}</>
  );
};

export const ShowMoreButton = ({ showMore, setShowMore }) => {
  return (
    <ShowMore onClick={() => setShowMore(!showMore)}>
      <ButtonContentWrapper>
        <span>{showMore ? 'Show less' : 'Show more'}</span>
        <Arrow showMore={showMore} />
      </ButtonContentWrapper>
    </ShowMore>
  );
};

ShowMoreButton.propTypes = {
  showMore: PropTypes.bool.isRequired,
  setShowMore: PropTypes.func.isRequired,
};
