import Image from "next/image";
import Link from "next/link";

type SocialButtonProps = {
  src: string;
  alt: string;
  size?: number;
  href: string;
};

const SocialButton = ({ src, alt, size = 32,href }: SocialButtonProps) => {
  return (
  <Link href={href}>
    <Image src={src} width={size} height={size} alt={alt} />
  </Link>
  )
};
export default SocialButton;
