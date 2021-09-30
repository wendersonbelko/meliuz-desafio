import { ReactNode, SetStateAction, Dispatch } from 'react';

import { Container, CardModal, ICardModalProps, CardHeader, IconClose, Title } from './styles';

interface IProps extends ICardModalProps {
    open: boolean;
    children: ReactNode;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
}

export const Modal = ({ open, children, size, setOpen, title }: IProps) => {

  const handleClose = () => {
    setOpen(!open);
  };

    return (
        <Container open={open}>
          <CardModal size={size}>
            <CardHeader>
              <Title>{title}</Title>
              <IconClose onClick={handleClose}/>
            </CardHeader>
            {children}
          </CardModal>
        </Container>
    )
}
