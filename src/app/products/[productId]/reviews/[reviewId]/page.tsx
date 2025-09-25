import { notFound } from "next/navigation";

export default function ReciewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Reviewss {params.reviewId} for products {params.productId}
    </h1>
  );
}
