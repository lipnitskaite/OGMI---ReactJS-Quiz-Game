import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import quizReducer from './slices/quizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
