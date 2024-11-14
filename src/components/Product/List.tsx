import { Product } from "../../types";
import { ProductCard } from "./Card";

type ProductListProps = {
  products: Product[];
};

export function ProductList(props: ProductListProps) {
  const { products } = props;

  return (
    <div className="flex max-w-2xl flex-col gap-4 lg:max-w-full">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Products
      </h2>

      <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}
