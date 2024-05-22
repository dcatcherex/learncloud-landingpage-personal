import Hero from "@/components/home/hero";
import Price from "@/components/home/price";
import Partner from "@/components/home/partner";
import Footer from "@/components/home/footer";
import News from "@/components/home/news";
import Events from "@/components/home/events";
import Testimonial from "@/components/home/testimonial";
import GradientSeparator from "@/components/home/gradient-separator";
import NavBar from "@/components/home/navbar";
import Features from "@/components/home/features";


type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => (
  <div id={id}>
    {children}
  </div>
);

const LandingPage = () => (
  <section className="relative ">
    <NavBar />
    <Section id="home">
      <Hero />
    </Section>
    <GradientSeparator />
    <Section id="feature">
      <Features />
    </Section>
    <GradientSeparator />
    <Section id="news">
        <News />
    </Section>
    <Section id="events">
      <Events />
    </Section>
    <Section id="price">
      <Price />
    </Section>
    <Section id="testimonial">
      <Testimonial />
    </Section>
    <Partner />
    <Footer />
  </section>
);

export default LandingPage;