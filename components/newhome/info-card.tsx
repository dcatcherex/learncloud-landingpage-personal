import Image from "next/image";

type InfoCardProps = {
  title?: string;
  image?: string;
};

const InfoCard = ({
  title = "LearnCloud",
  image = "/home/events/events3.jpg",
}: InfoCardProps) => {
  return (
    <div>
      <div className="w-[384px] h-[276px] relative">
        <Image
          className="rounded-3xl"
          src={image}
          fill
          style={{ objectFit: 'cover' }}
          alt="event {title}"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">{title}</h2>
    </div>
  );
};
export default InfoCard;
