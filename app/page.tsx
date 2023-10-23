import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to My Travel Blog",
  description: "My travel blog description",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/home.jpg')] relative">
      <div className="absolute bg-slate-900 insert-0 z-0 opacity-40" />
      <header className="z-10 relative flex items-center justify-between">
        <div className="logo-area">
          <Link href="/" className="flex justify-center">
            <Image
              src="/CoolNomad.svg"
              alt="CoolNomad"
              width="180"
              height="120"
            />
          </Link>
        </div>
        <nav className="text-slate-100">
          <ul className="flex justify-center [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:text-yellow-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
