import { useLocation } from 'react-router-dom';

import { toMovies, toPeople } from '../../core/App/routes';
import { searchQueryParamName } from '../queryParamNames';
import { useQueryParameter } from '../useQueryParameter';
import { useReplaceQueryParameter } from '../useReplaceQueryParameter';
import {
  NavigationWrapper,
  NavigationContainer,
  DoubleContainer,
  HeaderContainer,
  Logo,
  VideoIcon,
  Title,
  NavigationLinks,
  StyledNavLink,
  SearchContainer,
  SearchBox,
  SearchIcon,
  SearchInput,
} from './styled';
import videoIcon from './videoIcon.svg';

export const Navigation = () => {
  const { pathname } = useLocation();

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onSearchChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== '' ? target.value : undefined,
    });
  };

  return (
    <NavigationWrapper>
      <NavigationContainer>
        <DoubleContainer>
          <HeaderContainer>
            <Logo to={toMovies()}>
              <VideoIcon src={videoIcon} alt="logo" />
              <Title>Movies Browser</Title>
            </Logo>
            <NavigationLinks>
              <li>
                <StyledNavLink to={toMovies()}>Movies</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={toPeople()}>People</StyledNavLink>
              </li>
            </NavigationLinks>
          </HeaderContainer>
          <SearchContainer>
            <SearchBox>
              <SearchIcon />
              <SearchInput
                onChange={onSearchChange}
                value={query || ''}
                placeholder={`Search for ${
                  pathname.includes('/movie') ? 'movies' : 'people'
                }…`}
              />
            </SearchBox>
          </SearchContainer>
        </DoubleContainer>
      </NavigationContainer>
    </NavigationWrapper>
  );
};
