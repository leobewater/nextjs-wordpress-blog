import { getAllPosts } from "@/lib/post";
import SiteHeader from "@/components/SiteHeader";
import { Metadata } from "next";
import Link from "next/link";
import FeaturedImages from "@/components/FeaturedImages";
import SiteFooter from "@/components/SiteFooter";
import Date from "@/components/Date";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogHome = async () => {
  const posts = await getAllPosts();

  return (
    <div className="h-[50vh] min-h-[20rem] bg-[url('/home.jpg')] relative">
      <div className="absolute bg-slate-900 inset-0 opacity-40" />
      <div className="container lg:max-w-4xl mx-auto">
        <SiteHeader className="header-blog-home z-10 relative" />
      </div>

      <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">
        BLOG
      </h1>
      <p className="text-center text-slate-200 text-2xl relative z-10">
        Read our latest articles
      </p>
      <main>
        <section className="container mx-auto lg:max-w-5xl post-list mt-4">
          <ul>
            {posts?.nodes.map((post: any) => (
              <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                <div className="col-span-2">
                  <FeaturedImages post={post} />
                </div>
                <div className="col-span-3">
                  <h2 className="py-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 text-2xl hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="py-4">
                    Published on <Date dateString={post.date} />
                  </div>
                  <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></div>
                  <div className="py-4">
                    Posted under{" "}
                    {post.categories.nodes.map((category: any) => (
                      <Link
                        className="text-blue-400 hover:text-blue-500"
                        href={`/category/${category.slug}`}
                        key={category.slug}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogHome;
