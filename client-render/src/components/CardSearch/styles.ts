import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Avatar = Styled.img`
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 5px;


`;

export const Name = Styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;
