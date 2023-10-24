import Image from "next/image";
import Link from "next/link";
import React from "react";

type imgType = {
  src: string;
  width: number;
  height: number;
};

const FeaturedImages = ({ post }: { post: any }) => {
  let img: imgType = {
    src: "https://travel-blog-wp.local/wp-content/uploads/2023/10/1b466049-12df-3aec-a5db-42b6dc3a10d8.png",
    width: 300,
    height: 200,
  };

  if (post.featuredImage) {
    let size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: parseInt(size.width),
      height: parseInt(size.height),
    };
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={post.title}
        className="w-full h-full object-cover rounded-xl"
      />
    </Link>
  );
};

export default FeaturedImages;
