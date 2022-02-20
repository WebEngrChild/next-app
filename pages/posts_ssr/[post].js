// paramsにはpathのデータが格納されている
export async function getServerSideProps({ params }) {
  console.log(params); // { post: '1' }
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post); // { userId: 1, id: 1, ...
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