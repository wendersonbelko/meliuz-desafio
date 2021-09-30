import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { characterNameRequest } from "../../store/charactersByName/charactersByName.action";
import { GlobalStateRedux } from "../../store/root.reducer";

import { CardSearch, Modal } from "../";

import {
  Container,
  ButtonOpen,
  IconPlus,
  Buttons,
  IconSearch,
  IconHeart,
  Counter,
  Input,
  ContainerSearch,
  ButtonSeeAll,
  IconHome,
} from "./styles";
import { StateCharactersReducerTypes } from "../../store/characters/characters.reducer";
import { IPage } from "../../store/controlPage/controlPage.reducer";
import { pageRequest } from "../../store/controlPage/controlPage.action";

interface IProps {
  characters: StateCharactersReducerTypes;
  charactersByName: StateCharactersReducerTypes;
  page: IPage;
}

const ButtonMenu = ({ characters, charactersByName, page }: IProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [name, setName] = useState("");

  const callApi = () => {
    name.length > 0 && dispatch(characterNameRequest({ name, offset: 0 }));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  let time: any;
  const debounce = (text: string) => {
    clearTimeout(time);
    setName(text);
    time = setTimeout(() => {
      callApi();
    }, 500);
  };

  const handleRoute = (nextPage: IPage) => {
    dispatch(pageRequest(nextPage));
  }

  return (
    <>
      <Modal
        open={openSearch}
        setOpen={setOpenSearch}
        size="md"
        title="Search character"
      >
        <Input
          placeholder="Search name.."
          onChange={(e) => debounce(e.target.value)}
        />
        <ContainerSearch>
          {name.length > 0 &&
            charactersByName.characters.results
              .slice(0, 3)
              ?.map((character, index) => (
                <CardSearch
                  id={character.id}
                  name={character.name}
                  url={character.image.original_url}
                  key={index}
                />
              ))}
        </ContainerSearch>
        <ButtonSeeAll onClick={() => handleRoute({ page: 'name' })}>See more</ButtonSeeAll>
      </Modal>
      <Container>
        <ButtonOpen open={open} onClick={handleOpen}>
          <IconPlus open={open} />
        </ButtonOpen>
        <Counter open={open}>
          {characters.characters.results.length}/
          {characters.characters.number_of_total_results}
        </Counter>
        {
          page.page === 'name' ? (
            <Buttons open={open} location={1} onClick={() => handleRoute({ page: 'all' })}>
              <IconHome />
            </Buttons>
          ) : (
            <Buttons open={open} location={1} onClick={handleSearch}>
              <IconSearch />
            </Buttons>
          )
        }
        {
          page.page === 'favorite' ? (
            <Buttons open={open} location={2} onClick={() => handleRoute({ page: 'all' })}>
              <IconHome />
            </Buttons>
          ) : (
            <Buttons open={open} location={2} onClick={() => handleRoute({ page: 'favorite' })}>
              <IconHeart />
            </Buttons>
          )
        }
      </Container>
    </>
  );
};

function mapStateToProps(state: GlobalStateRedux) {
  return {
    characters: state.characters,
    charactersByName: state.charactersByName,
    page: state.page,
  };
}

export default connect(mapStateToProps)(ButtonMenu);
