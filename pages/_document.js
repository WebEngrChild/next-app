import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          {/* mainが削除されるとindex.jsは表示されない */}
          <Main />
          {/* _document.jsはサーバ側で処理が行われるためクリックイベントは不可。モーダルウィンドウなどを利用するためにReactのPortal機能を使いたい場合はこちら。一方でソース側では_nextよりも前にくる */}
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;