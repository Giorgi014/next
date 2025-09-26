"use client"
import { notFound } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ReciewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // const random = getRandomInt(1);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Reviewss {params.reviewId} for products {params.productId}
    </h1>
  );
}
