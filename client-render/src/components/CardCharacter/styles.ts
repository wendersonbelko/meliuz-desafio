import { AiFillHeart } from 'react-icons/ai';
import Styled from 'styled-components';

interface IFavorited {
  isFavorite: boolean;
}

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5rem; //200px
  height: 18.75rem; //300px
  border-radius: 4px;
  margin: 0.5rem;

  background-color: ${({ theme }) => theme.colors.skeletonBackGround};
`;

export const Photo = Styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 4px 4px 0px 0px;
`;

export const Text = Styled.p`
  font-size: 1.5rem;
  margin: auto;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    font-size: 2rem;
  }
`;

export const Favorited = Styled(AiFillHeart)<IFavorited>`
  position: absolute;
  margin: 10px;
  width: 2.5rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.favorite};
  opacity: ${({ isFavorite }) => isFavorite ? '100%' : '30%'};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

