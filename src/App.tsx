import { useEffect, useState } from "react";
import { VideoArea } from "./components/VideoArea";
import api from "./api";
import { ProductList } from "./components/Product/List";
import { Data } from "./types";
import { NavBar } from "./components/NavBar";

export function App() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    api
      .getData()
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="flex w-full max-w-5xl flex-col gap-4 p-4">
      <NavBar />
      {!data ? (
        <div className="flex flex-1 items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <VideoArea
            info={{
              title: data.video_headline,
              subtitle: data.video_sub_headline,
              url: data.video_url,
            }}
          />
          <ProductList products={data.products} />
        </>
      )}
    </div>
  );
}
