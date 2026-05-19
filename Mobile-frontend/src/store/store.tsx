import createSagaMiddleware from 'redux-saga';
import { reduxStorage } from './storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
 key: 'root',
 storage: reduxStorage,
 whiteList: ['cart', 'account'],
 blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false,
 }).concat(sagaMiddleWare)
})

sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;