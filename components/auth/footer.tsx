import Link from "next/link"

const Footer = () => {
  return (
    <div className="text-center mt-4 space-y-2">
        <h3 className="text-blue-600 text-xs font-normal">
          Need help signing in?
        </h3>
        <p className="text-gray-500 text-[10px] font-normal">
          By signing up, you accept our{" "}
          <Link className="text-blue-600" href={""}>
            Terms
          </Link>{" "}
          and{" "}
          <Link className="text-blue-600" href={""}>
            Privacy Policy.
          </Link>{" "}
        </p>
      </div>
  )
}
export default Footer