import { ActionReducerType } from './characters.action';

import { actionTypes } from '../actionTypes';

import { IAllCharacters } from '../../services/interfaces/characters';

export type StateCharactersReducerTypes = {
  characters: IAllCharacters;
  loading: boolean;
  error: boolean;
  offset: number;
  id: number;
  name: string;
}

const initialState: StateCharactersReducerTypes = {
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

export const charactersReducer = (state = initialState, action: ActionReducerType | any) => {
  switch(action.type) {
      case actionTypes.CHARACTERS_REQUEST:
        return {
          ...state,
          loading: true,
        }


    case actionTypes.CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: {
          error: action.payload.characters.error,
          limit: action.payload.characters.limit,
          number_of_page_results: action.payload.characters.number_of_page_results,
          number_of_total_results: action.payload.characters.number_of_total_results,
          offset: action.payload.characters.offset,
          results: [...state.characters.results, ...action.payload.characters.results],
          status_code: action.payload.characters.status_code,
          version: action.payload.characters.version
        },
        loading: false,
      }

    case actionTypes.CHARACTERS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state;
  }
}
