import InfoCard from "./info-card"

const events = [
  {
    title: "Makers United 2024 Land of Makers",
    date: "2022-01-01",
    image: "/home/events/events1.jpg",
    description: "Thai 2024 Startup 10th anniversary, celbrating a decade of innovation",
  },
  {
    title: "Seminar Makers United 2024 Land of Makers",
    date: "2022-01-01",
    image: "/home/events/events2.jpg",
    description: "Seminar & Networking Thai 2024 Startup 10th anniversary, celbrating a decade of innovation",
  },
  {
    title: "LearnCloud Talk: Artificial Intelligence",
    date: "2022-01-01",
    image: "/home/events/events3.jpg",
    description: "AI ความท้าทายและมุมมองใหม่ เพื่อใช้ต่อยอดธุรกิจด้านการศึกษา (EdTech)",
  },
  {
    title: "Makers United 2024 Land of Makers",
    date: "2022-01-01",
    image: "/home/events/events1.jpg",
    description: "Thai 2024 Startup 10th anniversary, celbrating a decade of innovation",
  },
]

const Events = () => {
  return (
    <section className="py-8 bg-[url('/home/bg-gradient-big.jpg')] bg-cover bg-left bg-no-repeat" >
      
      <div className="max-w-[1200px] lg:mx-auto gap-12 overflow-hidden">
        <h2 className="text-[32px] mb-8" >Events</h2>
        <div className="flex gap-12 ">
          {events.map((event, index) => (
            <InfoCard key={index} title={event.title} image={event.image} />
          ))}
        </div>
      </div>
      
    </section>
  )
}
export default Events