import Link from "next/link";
export default function index({ posts }) {
  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts_ssg/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
