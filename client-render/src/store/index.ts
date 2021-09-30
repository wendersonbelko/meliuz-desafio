import { createStore, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sagas from './root.saga';
import { Reducers } from './root.reducer';

const sagaMiddlewere = createSaga();

const persistConfig = {
    key: '@redux',
    storage,
    whitelist: ['page', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const Store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddlewere)));

sagaMiddlewere.run(sagas);

const persistor = persistStore(Store);

export { Store, persistor };