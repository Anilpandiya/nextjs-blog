import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>back to home.</a>
        </Link>
      </h2>
    </>
  );
}
