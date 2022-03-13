import fm from "front-matter";
import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import { join } from "path";
import { Infer, assert, assign, object, string } from "superstruct";

const postsPath = join(__dirname, "..", "posts");

export const Attributes = object({
  creationDate: string(),
  description: string(),
  title: string(),
});

export const Body = string();

export const Meta = assign(
  Attributes,
  object({
    slug: string(),
  })
);

export const Post = assign(Meta, object({ html: string() }));

export async function getPosts(): Promise<Infer<typeof Meta>[]> {
  const filenames = await readdir(postsPath);

  return Promise.all(
    filenames
      .filter((filename) => {
        return filename.endsWith(".md");
      })
      .map(async (filename) => {
        const content = await readFile(join(postsPath, filename));
        const { attributes } = fm(content.toString());
        assert(attributes, Attributes);
        return {
          slug: filename.replace(/\.md$/u, ""),
          ...attributes,
        };
      })
  );
}

export async function getPost(
  slug: string
): Promise<Infer<typeof Post> | null> {
  const path = join(postsPath, `${slug}.md`);
  let content: Awaited<ReturnType<typeof readFile>>;
  try {
    content = await readFile(path);
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return null;
    }
    throw err;
  }
  const { attributes, body } = fm(content.toString());
  assert(attributes, Attributes);
  assert(body, Body);
  const html = marked(body);
  return {
    html,
    slug,
    ...attributes,
  };
}
