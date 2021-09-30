import { actionTypes } from '../actionTypes';
import { IPage } from './controlPage.reducer';

export type IPageTypes = {
  type: actionTypes,
  payload: IPage,
};

export const pageRequest = (payload: IPage) => ({
  type: actionTypes.SET_SHOW_PAGE,
  payload: payload,
});
