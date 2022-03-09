import styled from 'styled-components';
import searchIcon from './searchIcon.svg';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  background: ${({ theme }) => theme.colors.navigationBackground};
  color: ${({ theme }) => theme.colors.itemsColor};
  min-height: 94px;
`;

export const NavigationContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  min-height: inherit;
`;

export const DoubleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: inherit;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  min-height: 54px;
`;

const activeClassName = 'active';

export const Logo = styled(NavLink).attrs(() => ({ activeClassName }))`
  display: flex;
  align-items: center;
  margin: 0 12px 0 24px;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.itemsColor};
    outline-offset: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 0 8px 0 0;

    &:focus-visable {
      outline: 1px solid ${({ theme }) => theme.colors.itemsColor};
    }
  }
`;

export const VideoIcon = styled.img`
  width: 34px;
  height: auto;
  aspect-ratio: 34/27;
  color: ${({ theme }) => theme.colors.itemsColor};
  margin: 0 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 0 12px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
    width: 14px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.itemsColor};
  font-size: 24px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
    font-size: 14px;
  }
`;

export const NavigationLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.itemsColor};

  :hover {
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  padding: 8px 24px;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.itemsColor};
  border: 1px solid ${({ theme }) => theme.colors.navigationBackground};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.itemsColor};
    border-radius: 24px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.itemsColor};
    border-radius: 24px;
  }

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.itemsColor};
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.itemsColor};
    color: ${({ theme }) => theme.colors.navigationBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-right: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxsmall}px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: inherit;
  padding: 0 16px;
  flex-wrap: wrap;
  min-height: 74px;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-right: 0px;
  }
`;

export const SearchBox = styled.form`
  position: relative;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 24px;
  top: 25%;
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url(${searchIcon});
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    background-size: 16px;
    width: 16px;
    width: 16px;
    left: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 432px;
  max-width: 90vw;
  height: 48px;
  border: none;
  border-radius: 33px;
  padding: 0;
  padding-left: 64px;
  background-color: ${({ theme }) => theme.colors.itemsColor};
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    padding-left: 44px;
    height: 44px;
  }
`;
