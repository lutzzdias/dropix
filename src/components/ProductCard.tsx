import { Button } from "@headlessui/react";
import { useState } from "react";
import { OrderForm } from "./OrderForm";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
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
      <OrderForm
        isOpen={isFormOpen}
        close={() => setIsFormOpen(false)}
        productId={id}
      />
    </div>
  );
}
