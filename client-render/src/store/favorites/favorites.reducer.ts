import { actionTypes } from '../actionTypes';
import { IPageTypes } from './favorites.action';

const initialState: string[] = [];

export const favoriteReducer = (state = initialState, action: IPageTypes) => {
  switch(action.type) {
      case actionTypes.ADD_FAVORITE:
        return [
          ...state, action.payload
        ]

      case actionTypes.REMOVE_FAVORITE:
        const newState = state.filter((x) => x !== action.payload)
        return [
          ...newState
        ]

    default:
      return state;
  }
}
