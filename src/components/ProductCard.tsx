import { Button } from "@headlessui/react";
import { useState } from "react";
import { BestChoiceIcon } from "./Icons";
import { OrderDialog } from "./OrderDialog";

export function ProductCard(props: { product: any }) {
  const {
    product_id: id,
    name,
    price,
    freight,
    image_url: imageUrl,
    discount,
    best_choice: favorite,
  } = props.product;

  let [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      key={id}
      className="group relative flex w-3/4 flex-col gap-2 sm:w-full"
    >
      <div className="w-full overflow-hidden rounded-md lg:h-80">
        {favorite && (
          <div className="absolute right-2 top-2 text-gray-900">
            <BestChoiceIcon />
          </div>
        )}
        <img
          alt=""
          src={imageUrl}
          className="size-full object-contain object-center"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm text-gray-700">{name}</h4>
          <p className="text-sm text-gray-500">{freight}</p>
        </div>
        <div>
          {discount !== 0 && (
            <p className="text-sm font-medium text-gray-900">
              ${(price - discount).toFixed(2)}
            </p>
          )}

          {discount !== 0 ? (
            <p className="text-end text-xs font-medium text-red-600 text-opacity-80 line-through">
              ${price.toFixed(2)}
            </p>
          ) : (
            <p className="text-sm font-medium text-gray-900">
              ${price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
      <Button
        className="flex w-full justify-center rounded-md bg-gray-100 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        onClick={() => setIsFormOpen(true)}
      >
        Order
      </Button>
      <OrderDialog
        isOpen={isFormOpen}
        close={() => setIsFormOpen(false)}
        productId={id}
      />
    </div>
  );
}
