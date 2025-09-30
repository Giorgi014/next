import { Product } from "@/components/product/page";
import { Reviews } from "@/components/reviews/page";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>
        <Suspense fallback={<p>Loading product details...</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading reviews...</p>}>
          <Reviews />
        </Suspense>
      </h1>
    </div>
  );
}
