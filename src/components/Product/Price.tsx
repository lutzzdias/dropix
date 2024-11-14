type PriceProps = {
  price: number;
  discount: number;
};

export function Price(props: PriceProps) {
  const { price, discount } = props;

  return (
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
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      )}
    </div>
  );
}
