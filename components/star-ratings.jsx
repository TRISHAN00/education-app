import Image from "next/image";

export default function Star({ ratings = 5 }) {
  const stars = new Array(ratings).fill(0);

  return (
    <>
      {stars.map((_, index) => (
        <Image
          key={index}
          src="/assets/star.svg"
          width={20}
          height={20}
          alt="star"
        />
      ))}
    </>
  );
}
