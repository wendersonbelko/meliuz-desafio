import { ActionReducerType } from './charactersByName.action';

import { actionTypes } from '../actionTypes';

import { IAllCharacters } from '../../services/interfaces/characters';

export type StateCharactersByNameReducerTypes = {
  characters: IAllCharacters;
  loading: boolean;
  error: boolean;
  offset: number;
  id: number;
  name: string;
}

const initialState: StateCharactersByNameReducerTypes = {
  characters: {
    error: '',
    limit: 0,
    number_of_page_results: 0,
    number_of_total_results: 0,
    offset: 0,
    results: [],
    status_code: 0,
    version: ''
  },
  loading: false,
  error: false,
  offset: 0,
  id: 0,
  name: ''
};

export const charactersByNameReducer = (state = initialState, action: ActionReducerType | any) => {
  switch(action.type) {
      case actionTypes.CHARACTERS_REQUEST:
        return {
          ...state,
          loading: true,
        }

      case actionTypes.CHARACTER_NAME_SUCCESS:
        return {
          characters: {
            error: action.payload.characters.error,
            limit: action.payload.characters.limit,
            number_of_page_results: action.payload.characters.number_of_page_results,
            number_of_total_results: action.payload.characters.number_of_total_results,
            offset: action.payload.characters.offset,
            results: [...action.payload.characters.results],
            status_code: action.payload.characters.status_code,
            version: action.payload.characters.version
          },
          loading: false,
          offset: action.payload.offset,
          id: action.payload.id,
          name: action.payload.name,
        }

      case actionTypes.CHARACTER_NAME_FAILURE:
        return {
          ...state,
          error: true,
          loading: false,
        }

    default:
      return state;
  }
}
