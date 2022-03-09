import styled, { css } from 'styled-components';

export const RateWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  justify-content: start;
  align-items: baseline;
  margin: 0;
  grid-template-areas: 'star average scale vote';

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: auto auto 1fr;
    grid-template-areas: 'star average vote';
  } ;
`;

export const StarIcon = styled.img`
  width: 24px;
  height: auto;
  aspect-ratio: 1/1;
  grid-area: star;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 16px;
    margin-right: 4px;
  } ;
`;

export const VoteAverage = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  margin: 0 8px 0 0;
  grid-area: average;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 13px;
    font-weight: 600;
    margin-right: 4px;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 16px;
      margin-right: 8px;
    `};
`;

export const RatingScale = styled.p`
  grid-area: scale;
  font-size: 14px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  } ;
`;

export const VoteCount = styled.p`
  grid-area: vote;
  padding-left: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 0 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding-left: 0;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
    `};
`;
