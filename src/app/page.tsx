import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Solutions from "@/components/home/Solutions";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import FAQ from "./../components/home/FAQ";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Hero />
      <Partners />
      <svg
        viewBox="0 254.136 499.27 45.897"
        xmlns="http://www.w3.org/2000/svg"
        className=" -mt-36"
      >
        <ellipse
          style={{ stroke: "rgb(0, 0, 0)" }}
          cx="248.85"
          cy="387.71"
          rx="329.392"
          ry="133.296"
        />
      </svg>
      <Services />
      <Solutions />
      <WhyUs />
      <FAQ />
    </>
  );
}
