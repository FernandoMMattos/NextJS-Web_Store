export default function githubLoaderImage({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality ?? 75}`;
}
