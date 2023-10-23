import React from "react";

interface BlogIdPageProps {
  params: { postslug: string };
}

const BlogIdPage = ({ params }: BlogIdPageProps) => {
  const slug = params.postslug;
  return <div>BlogIdPage slug: {slug}</div>;
};

export default BlogIdPage;
