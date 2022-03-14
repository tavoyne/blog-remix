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
          <Link
            key={post.slug}
            style={{ textDecoration: "none" }}
            to={post.slug}
          >
            <h3>{post.title}</h3>
            <div>{post.creationDate}</div>
            <p>{post.description}</p>
          </Link>
        );
      })}
    </main>
  );
}
