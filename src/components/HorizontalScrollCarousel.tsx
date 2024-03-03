"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import StarsCard from "./StarsCard";

const Example = () => {
  return (
    <div className="">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-73%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-[0vw] ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-screen w-[50vw] overflow-hidden rounded-xl "
    >
      <div className="absolute w-[100%] h-[0%] bg-gradient-to-b from-[#010c13] to-[#021c18] inset-y-1/2 z-0 transition-all duration-500 group-hover:h-[100%] group-hover:inset-y-0"></div>
      <StarsCard />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "project 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "project 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "project 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "project 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "project 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "project 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "project 7",
    id: 7,
  },
];

{
  /*  */
}
