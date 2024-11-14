import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import { VideoArea } from "./components/VideoArea";
import api from "./api";

export function App() {
  const [data, setData] = useState<any>(localData);

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
