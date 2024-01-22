import Container from "../Container";

import { SERVICES } from "@/config";
import ServiceCard from "../ServiceCard";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className=" bg-gradient-to-b from-black to-[#010c13] w-full h-fit overflow-hidden"
    >
      <Container>
        <section className="pt-[80px] relative">
          <h2 className="text-center text-xl sm:text-5xl font-bold tracking-[-0.02em] leading-[1.3] mt-0 mb-12 text-slate-300">
            Our Services
          </h2>
          <h3 className="whitespace-pre-wrap lg:whitespace-normal w-auto lg:w-full pb-10 md:pb-10 relative z-50 px-12 xl:px-0 text-slate-300 text-center text-[32px] leading-[1.3] font-normal mt-0 mb-[96px] mx-0">
            Your engine for blazingly fast application data
          </h3>
          <div className=" mb-14 md:mb-20 z-50 relative">
            <div
              className=" grid md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-9 lg:gap-y-20 undefined px-12 xl:px-0"
              id="secret-weapon-section"
            >
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.label}
                  label={service.label}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Services;
