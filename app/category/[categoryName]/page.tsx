import React from "react";

interface CategoryIdPageProps {
  params: { categoryName: string };
}
const CategoryIdPage = ({ params }: CategoryIdPageProps) => {
  return <div>CategoryIdPage category name: {params.categoryName}</div>;
};


export default CategoryIdPage;
