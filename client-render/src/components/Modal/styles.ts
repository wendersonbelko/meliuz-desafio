import Styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

interface IContainerProps {
    open: boolean;
};

export interface ICardModalProps {
  size: 'sm' | 'md' | 'lg';
};

export const Container = Styled.div<IContainerProps>`
  ${({ open }) => open ? 'display: flex;' : 'display: none;'}
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  align-items: center;
  align-content: center;
  justify-content: center;
  transition: 0.2s;
`;

export const CardModal = Styled.div<ICardModalProps>`
  width: ${({ size }) => size === 'sm' && '30%' || size === 'md' && '50%' || size === 'lg' && '70%'};
  height: auto;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

export const CardHeader = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = Styled.h1`
  color: ${({ theme }) => theme.colors.text}
`;

export const IconClose = Styled(AiOutlineClose)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  padding: 3px;
  transition: 0.2s;
  border-radius: 20px;
  margin-top: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;
