import Image from "next/image"

const Social = () => {
  return (
    <div className="flex gap-4">
    <div className="p-4 bg-primary border border-white rounded-full" >
        <Image
         src={"/logo/auth/google.svg"}
         width={16}
         height={16}
         alt="google login"
        />
    </div>
    <div className="p-4 bg-black border border-white rounded-full">
        <Image
         src={"/logo/auth/apple.svg"}
         width={16}
         height={16}
         alt="apple login"
        />
    </div>
    </div>
  )
}
export default Social