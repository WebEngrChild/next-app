// ①Path生成
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // pathの生成を行う
  const paths = posts.map((post) => ({
    // const paths = posts.map((post) => `/posts/${post.id}`);
    params: { post: post.id.toString() },
  }))

  // console.log(paths); 
//  { params: { post: '1' } },
//  { params: { post: '2' } }, 
//  { params: { post: '3' } }, ...

  return {
    paths,
    fallback: false,
  };
}

// ②データfetch
// paramsという変数がマストで必要になる
export async function getStaticProps({ params }) {
  const id = params.post; // 上記で生成したpathから
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
}

export default function post({ post }) {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}