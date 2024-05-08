import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookmarks from '../reducers/bookmarks';

function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: { bookmarks },
  });
  return (
    <Provider store={store}>
      <Head>
        <title>Morning News</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
