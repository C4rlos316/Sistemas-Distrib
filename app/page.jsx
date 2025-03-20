import Link from "next/link";

export default function Home() {
  console.log('Server side rendering');
  return( <>
  <h1> Hello, world</h1>
  <Link href="/about">Learn more about bookshelf</Link>

    <p/>

  <Link href="/contact">Contact us</Link>
</>
  );
  }

