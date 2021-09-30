import { Container, Avatar, Name } from './styles';

interface IProps {
  url: string;
  name: string;
  id: number;
}

export const CardSearch = ({ id, name, url }: IProps) => {

  return (
    <Container>
      <Avatar src={url}/>
      <Name>{name}</Name>
    </Container>
  )
}
