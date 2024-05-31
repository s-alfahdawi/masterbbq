import { general_photos } from "@/app/[locale]/_api/photos.json";
import Gallery from "/app/_components/gallery/Gallery";

export default function Gallerypage() {
  return <Gallery photos={general_photos} />;
}
