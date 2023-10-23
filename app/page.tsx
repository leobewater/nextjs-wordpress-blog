import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to My Travel Blog",
  description: "My travel blog description",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/home.jpg')] relative">
      <div className="absolute w-full h-full bg-slate-900 insert-0 z-0 opacity-40" />
      <SiteHeader className="z-10 relative" />
    </div>
  );
}
