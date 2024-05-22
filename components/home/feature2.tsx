import Image from "next/image";

type FeatureProps = {
  featureType?: "left" | "right";
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  subTitle?: string;
  description?: string;
};

const Feature = ({ 
    featureType = "left",
    imageSrc,
    imageAlt = "picture",
    imageWidth = 750,
    imageHeight = 489,
    title = "Generate Personalized Exams with AI.",
    subTitle = "Automatically",
    description = "We use artificial intelligence to generate exams that is unique to you by focusing on patching your weakness to improve your score.", 
}: FeatureProps) => {
  return (
    <section className=" bg-white py-10 lg:py-20 ">
      <div className={`max-w-[1200px] ml-4 mr-0 lg:mx-auto lg:flex items-center  ${featureType === "right" ? "flex-row-reverse" : ""}`}>
        <div>
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt="feature1"
          />
        </div>
        <div className="flex-1 pt-4 lg:pt-8 lg:p-4 lg:-ml-28 ">
          <h2 className="font-semibold text-3xl lg:text-[32px] text-blue-800 mb-3 lg:mb-6 ">
            {title}
          </h2>
          <h3 className="text-gray-800 text-xl lg:text-2xl font-medium mb-3 lg:mb-6">{subTitle}</h3>
          <p className="text-base font-normal text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Feature;
