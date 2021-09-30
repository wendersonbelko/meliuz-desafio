import { call, put } from 'redux-saga/effects';
import { getCharacters } from '../../services/comicVine.api';

import { IAllCharacters } from '../../services/interfaces/characters';
import { charactersSuccess, charactersFailure } from './characters.action';


// saga sem filtro
export function* charactersRequestSaga({payload}: any) {
  try {
    const { data }: {data: IAllCharacters} = yield call(() => getCharacters(payload.payload));
    yield put(charactersSuccess({characters: data}));
  } catch(err) {
    yield put(charactersFailure());
  }
};

export function* charactersSuccessSaga() {
  yield console.log('All characters request success');
};

export function* charactersFailureSaga() {
  yield console.log('All characters request failure');
};
