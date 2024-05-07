import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Morning News</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
