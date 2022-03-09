import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: 400;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 12px;
  } ;
`;
