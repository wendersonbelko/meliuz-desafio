import styled from 'styled-components';
import Styled from 'styled-components';

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const Profile = Styled.img`
    margin: 10px;
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
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

export const Label = Styled.label``;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 3px;
`;
