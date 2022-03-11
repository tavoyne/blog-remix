import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <h1>Théophile Avoyne</h1>
      <p>Hello, I'm Théophile Avoyne. I'm a software engineer.</p>
      <Link to="posts">Blog</Link>
    </div>
  );
}
