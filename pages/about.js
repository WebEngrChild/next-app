import Layout from '../components/layout';

export default function About() {
  return <h1>About Page</h1>
}

// {page}には<Component {...pageProps} />が渡されている
// すなわちそのファイル内でexportされている関数(上記でいうところのfunction About)
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};