import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { selectPersonCredits } from '../../PopularPeople/PersonDetails/personDetailsSlice';
import {
  selectConfiguration,
  selectGenres,
} from '../../../core/App/movieBrowserSlice';
import noMoviePhoto from '../../../features/Images/noMoviePhoto.svg';
import {
  SiteTitle,
  List,
  Tile,
  Picture,
  TileTitle,
  Year,
  Tags,
  Tag,
  ContentContainer,
} from './styled';
import { Rate } from '../../Rate';
import { toMovie } from '../../../core/App/routes';
import {
  selectMoviesData,
  selectMoviesSearchQuery,
} from '../../PopularMovies/moviesSlice';
import { ShowMoreButton } from '../ShowMoreButton';
import { StyledSection } from '../../../common/MovieAndPersonSection';
import { useGetScreenWidth } from '../../../useGetScreenWidth';
import { theme } from '../../../core/App/theme';
import PropTypes from 'prop-types';

const MovieTiles = ({ title }) => {
  const moviesData = useSelector(selectMoviesData);
  const searchQuery = useSelector(selectMoviesSearchQuery);
  const configuration = useSelector(selectConfiguration);
  const screenWidth = useGetScreenWidth();
  const [showMore, setShowMore] = useState(false);
  const moviesGenresData = useSelector(selectGenres);
  const moviesGenres = moviesGenresData.genres;
  const sectionName = title.toLowerCase();
  const creditsData = useSelector(selectPersonCredits);
  let moviesList;
  let size;
  switch (sectionName) {
    case 'cast':
      moviesList = creditsData.cast;
      size = configuration.images.poster_sizes[3];
      break;

    case 'crew':
      moviesList = creditsData.crew;
      size = configuration.images.poster_sizes[3];
      break;

    default:
      moviesList = moviesData.results;
      size =
        configuration.images.poster_sizes[
          screenWidth > theme.breakpoints.xsmall ? 4 : 2
        ];
  }

  const imageURL = configuration.images.secure_base_url;
  const poster = `${imageURL}${size}`;

  return (
    moviesList.length > 0 && (
      <>
        <StyledSection>
          {sectionName.includes('popular') ? (
            <SiteTitle>
              {searchQuery
                ? `Search results for "${searchQuery}" (${moviesData.total_results})`
                : title}
            </SiteTitle>
          ) : (
            <SiteTitle>
              {`Movie - ${sectionName} (${moviesList.length})`}
            </SiteTitle>
          )}
          <List>
            {moviesList.map(
              (
                {
                  id,
                  poster_path,
                  title,
                  release_date,
                  character,
                  job,
                  genre_ids,
                  vote_average,
                  vote_count,
                },
                index
              ) => (
                <li
                  key={index}
                  hidden={
                    !sectionName.includes('popular') && !showMore && index > 3
                  }
                >
                  <Tile to={toMovie({ id })}>
                    <Picture
                      src={
                        poster_path ? `${poster}${poster_path}` : noMoviePhoto
                      }
                      alt={`${sectionName} poster`}
                    />
                    <ContentContainer>
                      <div>
                        <TileTitle>{title}</TileTitle>

                        {release_date && (
                          <Year>
                            {character
                              ? `${character}
                                            (
                                                ${
                                                  release_date
                                                    ? release_date.slice(0, 4)
                                                    : ''
                                                }
                                            )`
                              : job
                              ? `${job}(
                                                            ${
                                                              release_date
                                                                ? release_date.slice(
                                                                    0,
                                                                    4
                                                                  )
                                                                : ''
                                                            }
                                                            )`
                              : release_date
                              ? release_date.slice(0, 4)
                              : ''}
                          </Year>
                        )}
                        <Tags>
                          {genre_ids.map((genreID) => (
                            <Tag key={nanoid()}>
                              {
                                moviesGenres.find(({ id }) => id === genreID)
                                  .name
                              }
                            </Tag>
                          ))}
                        </Tags>
                      </div>
                      <Rate
                        tile={true}
                        vote_average={vote_average}
                        vote_count={vote_count}
                      />
                    </ContentContainer>
                  </Tile>
                </li>
              )
            )}
          </List>
        </StyledSection>
        {!sectionName.includes('popular') && moviesList.length > 4 && (
          <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
        )}
      </>
    )
  );
};

export default MovieTiles;

MovieTiles.propTypes = {
  title: PropTypes.string.isRequired,
};
