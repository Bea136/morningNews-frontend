import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import bookmarks from '../reducers/bookmarks';
import user from '../reducers/user';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const reducers = combineReducers({ user, bookmarks });
const persistConfig = { key: 'morningNews', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      <Head>
        <title>Morning News</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
