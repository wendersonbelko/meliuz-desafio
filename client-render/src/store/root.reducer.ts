import { combineReducers } from 'redux';

import { charactersReducer, StateCharactersReducerTypes } from './characters/characters.reducer';
import { charactersByNameReducer, StateCharactersByNameReducerTypes } from './charactersByName/charactersByName.reducer';
import { IPage, pageReducer } from './controlPage/controlPage.reducer';
import { favoriteReducer } from './favorites/favorites.reducer';



export type GlobalStateRedux = {
  characters: StateCharactersReducerTypes,
  charactersByName: StateCharactersByNameReducerTypes,
  page: IPage,
  favorites: string[],
};

export const Reducers = combineReducers({
  characters: charactersReducer,
  charactersByName: charactersByNameReducer,
  page: pageReducer,
  favorites: favoriteReducer,
});
