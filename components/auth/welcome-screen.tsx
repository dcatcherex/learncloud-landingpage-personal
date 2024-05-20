import Image from "next/image";

const WelcomeScreen = () => {
  return (
    <section className=" min-w-[300px] max-w-96 h-[800px] rounded-lg p-4 bg-gradient-to-br from-primary/10 to-primary/30 ">
      <div className="relative top-0 right-28 ">
          <Image
          className="relative"
            src="/logo/3d-logo-ailearn.png"
            width={1200}
            height={600}
            alt="welcome screen"
          />
          <Image
            className="absolute bottom-6 right-12"
            src="/logo/logo-shadow.png"
            width={1200}
            height={600}
            alt="welcome screen"
          />
            </div>

      <div className="relative z-50">
          <h1 className="text-gray-800 text-5xl font-semibold">aiLearn</h1>
          <h2 className="text-gray-800 text-3xl font-normal mb-10">application</h2>
          <h3 className="text-gray-800 text-base font-normal max-w-">Personalized TOEIC exam practice </h3>
          <h3 className="text-gray-800 text-base font-normal max-w-">with AI</h3>

      <Image
      className="absolute -top-20 right-10 z-0"
        src="/logo/radial-gradient.png"
        width={800}
        height={800}
        alt="welcome screen"
      />
      </div>
      <div className="w-52 h-52 rounded-full bg-gradient-radial from-purple-500  to-transparent"></div>
    </section>
  );
};
export default WelcomeScreen;
