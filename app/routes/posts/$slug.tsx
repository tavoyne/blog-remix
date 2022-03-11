import { Link } from "remix";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<Awaited<ReturnType<typeof getPost>>>();

  return (
    <>
      <Link to="..">Back</Link>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}
