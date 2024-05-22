import Hero from "@/components/newhome/hero";
import Price from "@/components/newhome/price";
import Partner from "@/components/newhome/partner";
import Footer from "@/components/newhome/footer";
import News from "@/components/newhome/news";
import Events from "@/components/newhome/events";
import Testimonial from "@/components/newhome/testimonial";
import GradientSeparator from "@/components/newhome/gradient-separator";
import NavBar from "@/components/newhome/navbar";
import Features from "@/components/newhome/features";


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