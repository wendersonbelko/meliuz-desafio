import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { favoriteAddRequest, favoriteRemoveRequest } from '../../store/favorites/favorites.action';
import { GlobalStateRedux } from '../../store/root.reducer';
import {
  Container,
  Photo,
  Text,
  Favorited,
 } from './styles';

 interface IProps {
   url: string;
   name: string;
   id: string;
   characterId: string;
   favorites?: string[];
 }

const CardCharacter = ({ url, name, id, characterId, favorites }: IProps) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const nameArr = name.replace(' ', ',').split(',');

  const newName = nameArr.length > 1 ? `${nameArr[0]} ${nameArr[1].substring(0, 1).toUpperCase()}.` : `${nameArr[0]}`;

  const haveId = favorites!.filter((id) => id === characterId);

  const handleFavorite = () => {
    console.log(haveId)
    if (haveId && haveId.length > 0) {
      return dispatch(favoriteRemoveRequest(characterId));
    } else {
      dispatch(favoriteAddRequest(characterId));
    }
  };

  const handleInformationCharacter = () => {
    history.push(`/character/${characterId}`);
  }

  return (
    <Container id={id}>
      <Photo src={url} alt={`photo ${name}`}/>
      <Favorited isFavorite={haveId && haveId.length > 0} onClick={handleFavorite}/>
      <Text onClick={handleInformationCharacter}>{newName}</Text>
    </Container>
  )
}

function mapStateToProps(state: GlobalStateRedux) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps)(CardCharacter);
