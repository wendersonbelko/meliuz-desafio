import { actionTypes } from '../actionTypes';

export type IPageTypes = {
  type: actionTypes,
  payload: string,
};

export const favoriteAddRequest = (payload: string) => ({
  type: actionTypes.ADD_FAVORITE,
  payload: payload,
});

export const favoriteRemoveRequest = (payload: string) => ({
  type: actionTypes.REMOVE_FAVORITE,
  payload: payload,
});
