import Image from "next/image"
import Link from "next/link"

const socialIconSize = 60

const SectionSocials = () => {
    return (
        <section className="bg-white pt-32 dark:bg-slate-900 h-[800px] flex flex-col items-center justify-center">
            <h1 className="text-center xs:text-6xl text-5xl font-medium xl:text-7xl  text-slate-700 dark:text-white ">
            ติดตามความเคลื่อนไหวของเราได้ที่
            
        </h1>

        <div className="flex justify-center gap-16 mt-20">
            <Link 
            href={"/"}
            >
                <Image
                     src={"/logo/fb_logo.svg"}
                     width={socialIconSize}
                     height={socialIconSize}
                     alt=""
                />
            </Link>
            <Link 
            href={"/"}
            >
                <Image
                     src={"/logo/ig_logo.svg"}
                     width={socialIconSize}
                     height={socialIconSize}
                     alt=""
                />
            </Link>
            <Link 
            href={"/"}
            >
                <Image
                     src={"/logo/linkedin_logo.svg"}
                     width={socialIconSize}
                     height={socialIconSize}
                     alt=""
                />
            </Link>
            <Link 
            href={"/"}
            >
                <Image
                     src={"/logo/tiktok_logo.svg"}
                     width={socialIconSize}
                     height={socialIconSize}
                     alt=""
                />
            </Link>
        </div>
        </section>
    )
}
export default SectionSocials