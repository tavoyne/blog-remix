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
      {posts.map((post) => {
        return (
          <Link key={post.slug} to={post.slug}>
            <div>{post.creationDate}</div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </Link>
        );
      })}
    </main>
  );
}
