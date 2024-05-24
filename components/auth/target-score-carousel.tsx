import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const TargetScoreCarousel = () => {
  return (
    <Carousel className="w-full max-w-[200px]">
      <CarouselContent >
        {Array.from({ length: (990 - 450) / 10 + 1 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/4 lg:basis-1/3">
            <div className="p-1">
                <div className="flex items-center justify-center p-1">
                  <span className="text-2xl font-semibold">{450 + index * 10}</span>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default TargetScoreCarousel