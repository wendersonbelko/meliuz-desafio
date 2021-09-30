import Styled from 'styled-components';

import { AiOutlinePlus, AiOutlineSearch, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';

interface IButtonOpenProps {
    open: boolean;
};

interface IButtonsProps extends IButtonOpenProps {
    location: number;
}

export const Container = Styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonOpen = Styled.div<IButtonOpenProps>`
    width: 50px;
    height: 50px;
    background-color: ${({ theme, open }) => open ? theme.colors.backGroundButtonClose : theme.colors.backGroundButton};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 3px 14px 0px rgba(158,158,158,0.7);
    cursor: pointer;
    transition: 0.5s;
    z-index: 1;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const Buttons = Styled.div<IButtonsProps>`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.backGroundButton};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 3px 14px 0px rgba(158,158,158,0.7);
    cursor: pointer;
    transition: 0.5s;
    position: absolute;
    opacity: ${({ open }) => open ? '1' : '0'};
    top: ${({ open, location }) => open ? `${location * 55}px` : '0px'};
    left: 5px;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const IconPlus = Styled(AiOutlinePlus)<IButtonOpenProps>`
    transition: 0.5s;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

export const IconSearch = Styled(AiOutlineSearch)``;

export const IconHeart = Styled(AiOutlineHeart)``;

export const IconHome = Styled(AiOutlineHome)`;`

export const Counter = Styled.p<IButtonOpenProps>`
    background-color: ${({ theme }) => theme.colors.backGroundButton};
    border-radius: 5px;
    padding: 4px;
    display: ${({ open }) => open ? `flex` : 'hidden'};
    justify-content: center;
    align-items: center;
    box-shadow: -1px 3px 14px 0px rgba(158,158,158,0.7);
    cursor: pointer;
    transition: 0.5s;
    position: absolute;
    opacity: ${({ open }) => open ? '0' : '1'};
    right: ${({ open }) => open ? `0px` : '55px'};
    top: 12px;
`;

export const Input = Styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.backGroundButton};
  outline: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  padding: 5px;
`;

export const ContainerSearch = Styled.div``;

export const ButtonSeeAll = Styled.button`
  border-radius: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  outline-color: none;
  margin-top: 10px;
`;
