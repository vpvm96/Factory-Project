import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

export default function Thumbnail({ image, title }: Props) {
  return (
    <Image
      className="rounded-lg"
      src={`/images/${image}.jpg`}
      alt={title}
      width={500}
      height={700}
    />
  );
}
