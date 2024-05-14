import Image from "next/image"

const Partner = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-200">
          <h3 className="text-center text-gray-400 text-xl font-medium mb-4 ">In cooperative partnership with</h3>
          <div className="flex justify-center items-center gap-2 lg:gap-10 flex-wrap mix-blend-multiply opacity-50">
            <Image
              src={"/logo/partner2/shark.png"}
              width={60}
              height={60}
              alt=""
            />
            <Image
              src={"/logo/partner2/mwithme.png"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/logo/partner2/trium.png"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/logo/partner2/slimup.png"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/logo/partner2/chem.png"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/logo/partner2/b.png"}
              width={60}
              height={60}
              alt=""
            />
            <Image
              src={"/logo/partner2/leart.png"}
              width={60}
              height={60}
              alt=""
            />
            <Image
              src={"/logo/partner2/diamond.png"}
              width={60}
              height={60}
              alt=""
            />
          </div>
        </div>
  )
}
export default Partner