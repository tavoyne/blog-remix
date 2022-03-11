import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";

export const loader = () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Awaited<ReturnType<typeof getPosts>>>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
