import Image from "next/image";
import factoryImage2 from "public/images/factory02.jpg";
import factoryImage from "public/images/factory.jpg";

import MultiCarousel from "./MultiCarousel";

export default function Banner() {
  return (
    <section>
      <MultiCarousel>
        <Image
          src={factoryImage}
          alt="Banner factory image"
          draggable={false}
          className="w-full h-96 object-fill hover:cursor-pointer"
        />
        <Image
          src={factoryImage2}
          alt="Banner factory image"
          draggable={false}
          className="w-full h-96 object-fill hover:cursor-pointer"
        />
      </MultiCarousel>
    </section>
  );
}
