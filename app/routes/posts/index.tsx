import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

// eslint-disable-next-line require-await
export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
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
