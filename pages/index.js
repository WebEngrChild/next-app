
import Link from 'next/link';
import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Home() {
  return (
    <div>
      <Head>
        <title>{products[1].name}</title>
        <meta name="description" content={`${products[1].name}のページ`} />
        <meta property="og:title" content={products[1].name} />
        <meta
          property="og:description"
          content={`${products[1].name}のページ`}
        />
      </Head>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>POST_SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/posts_ssg">
            <a>POST_SSG</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}