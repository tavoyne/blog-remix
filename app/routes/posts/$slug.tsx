import { Link } from "remix";
import { useCatch, useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const meta: MetaFunction = ({
  data,
}: {
  data: Awaited<ReturnType<typeof getPost>> | undefined;
}) => {
  return {
    description: data?.description || "Not found.",
    title: data?.title || "Not found.",
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const post = await getPost(params.slug);
  if (!post) {
    throw new Response("What a joke! Not found.", {
      status: 404,
    });
  }
  return post;
};

export default function PostSlug() {
  const post = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <>
      <p>{post.creationDate}</p>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
      <br />
      <div>
        <a
          style={{ marginRight: "0.75rem" }}
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        >
          Tweet this article
        </a>
        <a
          href={`https://github.com/tavoyne/blog/blob/master/posts/${post.slug}.md`}
        >
          Edit on GitHub
        </a>
      </div>
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <>
        <h1>404</h1>
        <p>You are trying to visit a page that does not exists.</p>
        <Link to="/">Home</Link>
      </>
    );
  }
}
