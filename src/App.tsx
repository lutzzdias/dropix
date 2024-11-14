import { useEffect, useState } from "react";
import { VideoArea } from "./components/VideoArea";
import api from "./api";
import { ProductList } from "./components/Product/List";
import { Product } from "./types";

const products: Product[] = [
  {
    product_id: 1,
    name: "Product 1",
    price: 100,
    freight: "Free shipping",
    image_url: "https://github.com/lutzzdias.png",
    discount: 10,
    best_choice: true,
  },
  {
    product_id: 2,
    name: "Product 2",
    price: 200,
    freight: "Free shipping",
    image_url: "https://github.com/lutzzdias.png",
    discount: 0,
    best_choice: false,
  },
  {
    product_id: 3,
    name: "Product 3",
    price: 300,
    freight: "Free shipping",
    image_url: "https://github.com/lutzzdias.png",
    discount: 30,
    best_choice: false,
  },
  {
    product_id: 4,
    name: "Product 4",
    price: 400,
    freight: "Free shipping",
    image_url: "https://github.com/lutzzdias.png",
    discount: 0,
    best_choice: false,
  },
];

const localData = {
  video_headline: "The best products for you",
  video_sub_headline: "Check out our selection of products",
  video_url: "https://youtu.be/VxZMiyhEAi0?si=dK9HYHtHxuBAPQK4",
  products: products,
};

export function App() {
  const [data, setData] = useState(localData);

  useEffect(() => {
    api
      .getData()
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="flex max-w-5xl flex-col gap-6">
      <VideoArea
        info={{
          title: data.video_headline,
          subtitle: data.video_sub_headline,
          url: data.video_url,
        }}
      />
      <ProductList products={data.products} />
    </div>
  );
}
