/* eslint-disable react/jsx-no-comment-textnodes */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/locals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
