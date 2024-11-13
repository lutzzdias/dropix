import { buildEmbedUrl } from "../util/url";

export function VideoArea(props: any) {
  const { title, subtitle, url } = props.info;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <h3 className="text-pretty text-base font-medium text-gray-500 sm:text-lg">
          {subtitle}
        </h3>
      </div>
      <iframe
        src={buildEmbedUrl(url)}
        title="Responsive video"
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
