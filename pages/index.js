import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/Home.module.css'; 

const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
function Content({ type }) {
  return (
    <div>
      <p>ここにコンテンツが入ります。</p>
      {/* ここのp styleはcontentのみに適応される。globalをつけると外側にも利用される */}
      <style global jsx>{`
        p {
          color: ${type == 'alert' ? 'red' : 'blue'};
        }
      `}</style>
    </div>
  );
}

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
          <Link href="/posts_ssr">
            <a>POST_SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/posts_ssg">
            <a>POST_SSG</a>
          </Link>
        </li>
        <li>
          <Link href="/products/bag">
            <a>Products/bag</a>
          </Link>
        </li>
        <li>
          <Link href="/products/bag/red">
            <a>Products/bag/red</a>
          </Link>
        </li>
        <li>
          <Link href="/posts_swr">
            <a>SWR</a>
          </Link>
        </li>
      </ul>
      <h1 className={styles.headingModule}>Hello Next.js</h1>
      <Content type="alert"/>
      <p>Contentsタグ内のcssが外部に適応されています。</p>
    </div>
  );
}