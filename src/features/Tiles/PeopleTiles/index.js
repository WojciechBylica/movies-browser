import { useState } from 'react';
import { useSelector } from 'react-redux';

import noPersonPhoto from '../../../features/Images/noPersonPhoto.svg';
import { PeopleList, ProfilePicture, Role, TileTitle, Title } from './styled';
import { TilesTile } from '../TilesTile';
import { toProfile } from '../../../core/App/routes';
import { selectMovieCredits } from '../../PopularMovies/MovieDetails/movieDetailsSlice';
import {
  selectPeopleData,
  selectPeopleSearchQuery,
} from '../../PopularPeople/peopleSlice';
import { StyledSection } from '../../../common/MovieAndPersonSection';
import { ShowMoreButton } from '../ShowMoreButton';
import { selectConfiguration } from '../../../core/App/movieBrowserSlice';
import { useGetScreenWidth } from '../../../useGetScreenWidth';
import { theme } from '../../../core/App/theme';
import PropTypes from 'prop-types';

const PeopleTiles = ({ title }) => {
  const peopleData = useSelector(selectPeopleData);
  const creditsData = useSelector(selectMovieCredits);
  const searchQuery = useSelector(selectPeopleSearchQuery);
  const configuration = useSelector(selectConfiguration);

  const [showMore, setShowMore] = useState(false);

  let peopleList;
  const sectionName = title.toLowerCase();
  const imageURL = configuration.images.secure_base_url;

  const screenWidth = useGetScreenWidth();

  let size =
    configuration.images.poster_sizes[
      screenWidth > theme.breakpoints.small ? 2 : 3
    ];

  const poster = `${imageURL}${size}`;

  switch (sectionName) {
    case 'cast':
      peopleList = creditsData.cast;
      break;

    case 'crew':
      peopleList = creditsData.crew;
      break;

    default:
      peopleList = peopleData.results;
  }

  return (
    <>
      <StyledSection>
        <Title>
          {sectionName.includes('popular') && searchQuery
            ? `Search results for "${searchQuery}" (${peopleData.total_results})`
            : title}
        </Title>
        <PeopleList>
          {peopleList.map(
            ({ id, profile_path, name, character, job }, index) => (
              <li
                key={index}
                hidden={
                  !sectionName.includes('popular') && !showMore && index > 5
                }
              >
                <TilesTile to={toProfile({ id })}>
                  <ProfilePicture
                    src={
                      profile_path ? `${poster}${profile_path}` : noPersonPhoto
                    }
                    alt={`${name} poster`}
                  />
                  <TileTitle>{name}</TileTitle>
                  {!sectionName.includes('popular') && (
                    <Role>{character || job}</Role>
                  )}
                </TilesTile>
              </li>
            )
          )}
        </PeopleList>
      </StyledSection>
      {!sectionName.includes('popular') && peopleList.length > 6 && (
        <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
      )}
    </>
  );
};

export default PeopleTiles;

PeopleTiles.propTypes = {
  title: PropTypes.string,
};
