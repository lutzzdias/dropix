import { Button } from "@headlessui/react";
import { BestChoiceIcon } from "../icons";
import { OrderDialog } from "../Order/Dialog";
import { Product } from "../../types";
import { Price } from "./Price";
import { useDialogContext } from "../../context/DialogContext";

type ProductCardProps = {
  product: Product;
};

export function ProductCard(props: ProductCardProps) {
  const {
    product_id: id,
    name,
    price,
    freight,
    image_url: imageUrl,
    discount,
    best_choice: favorite,
  } = props.product;

  let { setIsOpen } = useDialogContext();

  return (
    <div
      key={id}
      className="group relative flex w-3/4 flex-col gap-2 rounded-lg px-2 pb-2 shadow-md ring-1 ring-gray-200 sm:w-full"
    >
      <div className="w-full overflow-hidden rounded-md lg:h-80">
        {favorite && (
          <div className="absolute right-2 top-2 text-teal-600">
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
          <h4 className="line-clamp-1 text-sm text-gray-700">{name}</h4>
          <p className="text-sm text-gray-500">{freight}</p>
        </div>
        <Price price={price} discount={discount} />
      </div>
      <Button
        className="flex w-full justify-center rounded-md bg-teal-600 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        onClick={() => setIsOpen(true)}
      >
        Order
      </Button>
      <OrderDialog />
    </div>
  );
}
