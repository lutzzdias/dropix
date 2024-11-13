export function buildEmbedUrl(ytUrl: string) {
  const youtubeIdMatch = ytUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=)))([a-zA-Z0-9_-]{11})/,
  );

  if (youtubeIdMatch && youtubeIdMatch[1]) {
    const videoId = youtubeIdMatch[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    throw new Error("Invalid YouTube URL");
  }
}
