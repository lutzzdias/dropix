import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import { VideoArea } from "./components/VideoArea";

export function App() {
  const [videoInfo, setVideoInfo] = useState<{
    title: string;
    subtitle: string;
    url: string;
  } | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "user-token": "2A50C22E-7954-4C73-9CF9-F6D298C047A7",
            },
          },
        );
        const data = (await response.json()).object[0];
        setVideoInfo({
          title: data.video_headline,
          subtitle: data.video_sub_headline,
          url: data.video_url,
        });
        setProducts(data.products);
      } catch (error) {
        alert("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex max-w-5xl flex-col gap-6">
      {videoInfo && <VideoArea info={videoInfo} />}
      {products.length > 0 && <ProductList products={products} />}
    </div>
  );
}
