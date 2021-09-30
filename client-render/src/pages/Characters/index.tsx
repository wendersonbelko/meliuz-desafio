import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { charactersRequest } from "../../store/characters/characters.action";
import { characterNameRequest } from '../../store/charactersByName/charactersByName.action';
import { GlobalStateRedux } from "../../store/root.reducer";

import { Container, ContainerCards } from "./Styles";
import { CardSkeleton, CardCharacter, Bubbles } from "../../components";
import { ICharacter } from "../../services/interfaces/characters";

export const Characters = () => {
  const charactersRedux = useSelector(
    (state: GlobalStateRedux) => state.characters
  );
  
  const charactersByNameRedux = useSelector(
    (state: GlobalStateRedux) => state.charactersByName
  );

  const pageRedux = useSelector(
    (state: GlobalStateRedux) => state.page
  );


  const dispatch = useDispatch();

  const callApi = () => {
    switch(pageRedux.page) {
      case 'all':
        return dispatch(charactersRequest({ offset: charactersRedux?.characters.offset! + 75 }));

      case 'name':
        return dispatch(characterNameRequest({ offset: charactersByNameRedux?.characters.offset! + 75 }));

      default:
        return dispatch(charactersRequest({ offset: charactersRedux?.characters.offset! + 75 }));
    }
  };

  const checkScroll = () => {
    if (window.scrollY > document.body.scrollHeight * 0.8) {
      switch(pageRedux.page) {
        case 'all':
          return !charactersRedux.loading && callApi();
        
        case 'name':
          return !charactersByNameRedux.loading && callApi();

        default:
          return !charactersRedux.loading && callApi();
      }
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll, charactersRedux?.characters.results, charactersByNameRedux?.characters.results]);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Container>
      <ContainerCards>
        {
          pageRedux.page === 'all' && charactersRedux?.characters?.results?.map((character: ICharacter, index) => (
            <CardCharacter
              name={character.name}
              url={character.image.original_url}
              key={index}
              characterId={String(character.id)}
              id={`card-render-${index}`}
            />
          ))
        }
        {
          pageRedux.page === 'name' && charactersByNameRedux?.characters?.results?.map((character: ICharacter, index) => (
            <CardCharacter
              name={character.name}
              url={character.image.original_url}
              key={index}
              characterId={String(character.id)}
              id={`card-render-${index}`}
            />
          ))
        }
        {charactersByNameRedux?.loading || charactersRedux?.loading && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </ContainerCards>
      {charactersByNameRedux?.loading || charactersRedux?.loading && <Bubbles />}
    </Container>
  );
};
