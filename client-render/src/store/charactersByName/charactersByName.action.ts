import { IAllCharacters } from '../../services/interfaces/characters';

import { actionTypes } from '../actionTypes';

type requestTypes = {
  offset?: number;
  id?: number;
  name?: string;
};

export type payloadTypes = {
  characters: IAllCharacters;
  offset?: number;
  id?: number;
  name?: string;
};

export type ActionReducerType = {
  type: actionTypes,
  payload: payloadTypes,
};

const initialPayload = {
  characters: {},
  offset: 0,
  id: 0,
  name: '',
};

export const characterNameRequest = (payload: requestTypes) => ({
  type: actionTypes.CHARACTER_NAME_REQUEST,
  payload: { ...initialPayload, payload },
});

export const characterNameSuccess = (payload: payloadTypes) => ({
  type: actionTypes.CHARACTER_NAME_SUCCESS,
  payload: payload,
});

export const characterNameFailure = () => ({
  type: actionTypes.CHARACTER_NAME_FAILURE,
  payload: initialPayload,
});
