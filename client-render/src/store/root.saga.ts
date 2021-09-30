import { all, takeLatest } from 'redux-saga/effects';

import { actionTypes } from './actionTypes';

import {
  charactersRequestSaga,
  charactersSuccessSaga,
  charactersFailureSaga,
 } from './characters/characters.saga';

 import {
  charactersNameFailureSaga,
  charactersNameRequestSaga,
  charactersNameSuccessSaga,
 } from './charactersByName/charactersByName.saga';

export default function* rootSaga(): any {
  return yield all ([
    takeLatest(actionTypes.CHARACTERS_REQUEST, charactersRequestSaga),
    takeLatest(actionTypes.CHARACTERS_SUCCESS, charactersSuccessSaga),
    takeLatest(actionTypes.CHARACTERS_FAILURE, charactersFailureSaga),

    takeLatest(actionTypes.CHARACTER_NAME_REQUEST, charactersNameRequestSaga),
    takeLatest(actionTypes.CHARACTER_NAME_SUCCESS, charactersNameSuccessSaga),
    takeLatest(actionTypes.CHARACTER_NAME_FAILURE, charactersNameFailureSaga),
  ]);
}
