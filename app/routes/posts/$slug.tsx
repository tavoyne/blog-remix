import { Link } from "remix";
import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const meta: MetaFunction = ({
  data,
}: {
  data: Awaited<ReturnType<typeof getPost>> | undefined;
}) => {
  if (!data) {
    return {
      description: "This page doesn't exist.",
      title: "Page not found",
    };
  }
  return {
    description: data.description,
    title: data.title,
  };
};

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
      <a href={`https://github.com/tavoyne/${post.slug}.md`}>Edit on GitHub</a>
    </>
  );
}
