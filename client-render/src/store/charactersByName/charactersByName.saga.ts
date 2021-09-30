import { call, put } from 'redux-saga/effects';
import { getCharacters } from '../../services/comicVine.api';

import { IAllCharacters } from '../../services/interfaces/characters';
import { characterNameFailure, characterNameSuccess } from './charactersByName.action';

export function* charactersNameRequestSaga({payload}: any) {
  console.log(payload)
  try {
    const { data }: { data: IAllCharacters } = yield call(() => getCharacters(payload.payload));
    yield put(characterNameSuccess({ characters: data }));
  } catch(err) {
    yield put(characterNameFailure());
  }
};

export function* charactersNameSuccessSaga() {
  yield console.log('filter by name success');
};

export function* charactersNameFailureSaga() {
  yield console.log('Filter by name failure');
};


