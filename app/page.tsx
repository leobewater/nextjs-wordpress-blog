import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to My Travel Blog",
  description: "My travel blog description",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/home.jpg')] relative">
      <div className="absolute w-full h-full bg-slate-900 insert-0 z-0 opacity-40" />
      <SiteHeader className="z-10 relative" />
      <main>
        <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
          <h1 className="text-6xl text-center text-slate-100">
            Welcome to <span className="text-yellow-400">My Travel Blog</span>
          </h1>
          <div className="mt-20">
            <Link href="/blog" className="text-2xl text-slate-800 bg-slate-100 border py-3 px-4 hover:bg-yellow-300 transition">Read Blog</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
