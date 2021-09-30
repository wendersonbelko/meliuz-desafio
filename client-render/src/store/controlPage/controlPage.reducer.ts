import { actionTypes } from '../actionTypes';
import { IPageTypes } from './controlPage.action';

export interface IPage {
  page: 'all' | 'favorite' | 'name'
}

const initialState: IPage = {
  page: 'all'
};

export const pageReducer = (state = initialState, action: IPageTypes) => {
  switch(action.type) {
      case actionTypes.SET_SHOW_PAGE:
        return {
          ...action.payload,
        }

    default:
      return state;
  }
}
