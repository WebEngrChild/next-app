import '../styles/globals.css'; // _app.js以外は読み込むことはできない

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}