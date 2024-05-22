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
    <div className="flex items-center lg:flex-col gap-4 lg:gap-0 border  lg:border-0 rounded-lg lg:rounded-none hover:cursor-pointer">
      <div className=" lg:w-[384px] lg:h-[276px] relative">
        <Image
          className="rounded-xl lg:rounded-3xl"
          src={image}
          fill
          style={{ objectFit: 'cover' }}
          alt="event {title}"
        />
      </div>
      <h2 className="text-xl lg:text-2xl font-semibold text-gray-500 lg:text-gray-800 my-2 lg:my-0 lg:mt-4">{title}</h2>
    </div>
  );
};
export default InfoCard;
