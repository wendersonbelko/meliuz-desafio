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
};

export const charactersRequest = (payload: requestTypes) => ({
  type: actionTypes.CHARACTERS_REQUEST,
  payload: { ...initialPayload, payload },
});

export const charactersSuccess = (payload: payloadTypes) => ({
  type: actionTypes.CHARACTERS_SUCCESS,
  payload: payload,
});

export const charactersFailure = () => ({
  type: actionTypes.CHARACTERS_FAILURE,
  payload: initialPayload,
});
