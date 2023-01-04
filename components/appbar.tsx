import Link from "next/link";

export default function Appbar() {
  return (
    <header className="p-4 shadow">
      <ul className="">
        <li className="flex flex-col gap-4 md:flex-row">
          <Link href="/" className="">Home</Link>
          <Link href="/about" className="">About</Link>
          <Link href="/store" className="">Store</Link>
          <Link href="/contact" className="">Contact</Link>
          <Link href="/blog" className="">Blog</Link>
        </li>
      </ul>
    </header>
  )
}
