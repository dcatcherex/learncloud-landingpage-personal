import Feature from "@/components/home/feature"
import Feature2 from "@/components/home/feature2"


const Features = () => {

  return (
    <section className="">
        <Feature2
            featureType="left"
            imageSrc="/home/feature1.png"
            title="Automatically"
            subTitle="Generate Personalized Exams with AI."
            description="We use artificial intelligence to generate exams that is unique to you by focusing on patching your weakness to improve your score."
          />
          <div className="-mt-28 lg:-mt-72 pt-20">
            <Feature
              featureType="right"
              imageSrc="/home/feature2.png"
              title="Precisely"
              subTitle="Analyze the result of your practice and exams."
              description="Our program reviews your performance after every test you take and
              create a detailed report that is personalized to you."
            />
          </div>
    </section>
  )
}
export default Features