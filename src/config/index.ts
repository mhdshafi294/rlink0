import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    value: "/" as const,
  },
  {
    label: "Partners",
    value: "#partners" as const,
  },
  {
    label: "Services",
    value: "#services" as const,
  },
  {
    label: "Projects",
    value: "#projects" as const,
  },
  {
    label: "Why Us",
    value: "#whyUs" as const,
  },
  {
    label: "FAQ",
    value: "#faq" as const,
  },
];

export const SERVICES = [
  {
    label: "Power Digital Marketing",
    description:
      "Store and query data quickly and efficiently with automatic partitioning, columnar compression, and real-time aggregation. Grow effortlessly with dynamic scaling and infinite storage.",
    icon: "/marketing.svg",
  },
  {
    label: "Software Development",
    description:
      "Better engineering leads to efficient compute and storage, which results in costs savings. Save even more with compression, usage-based storage, and low-cost storage tier for rarely-accessed data.",
    icon: "/software.svg",
  },
  {
    label: "Creative Graphic Designer",
    description:
      "Focus on your app not DBOps, with easy tools and features: Programmatic APIs, job scheduling, one-click forking, high availability, replication, seamless upgrades, expert support, and more.",
    icon: "/design.svg",
  },
  {
    label: "Operation Management",
    description:
      "Built on PostgreSQL so you can rely on rock-solid architecture and the entire ecosystem, but also get 1,000x faster queries, 90% data compression, and 100+ SQL data analysis hyperfunctions.",
    icon: "/manage.svg",
  },
];

export const PROJECTS = [
  {
    label: "Project 1",
    description:
      "Store and query data quickly and efficiently with automatic partitioning, columnar compression, and real-time aggregation.",
    icon: "/project1.svg",
  },
  {
    label: "Project 2",
    description:
      "Better engineering leads to efficient compute and storage, which results in costs savings. Save even more with compression.",
    icon: "/project2.svg",
  },
  {
    label: "Project 3",
    description:
      "Focus on your app not DBOps, with easy tools and features: Programmatic APIs, job scheduling, high availability, replication.",
    icon: "/project3.svg",
  },
  {
    label: "Project 4",
    description:
      "Built on PostgreSQL so you can rely on rock-solid architecture and the entire ecosystem, but also get 1,000x faster queries, 90% data compression.",
    icon: "/project4.svg",
  },
  {
    label: "Project 5",
    description:
      "Store and query data quickly and efficiently with automatic partitioning, columnar compression, and real-time aggregation.",
    icon: "/project5.svg",
  },
  {
    label: "Project 6",
    description:
      "Better engineering leads to efficient compute and storage, which results in costs savings. Save even more with compression.",
    icon: "/project6.svg",
  },
];

export const FAQs = [
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor.  Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor.  Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
  {
    question: "The most popular question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. \n Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
  },
];

export const COMMUNITY_LINKS = [
  {
    link: "https://instagram.com/r_link.io?igshid=OGQ5ZDc2ODk2ZA==",
    Icon: Instagram,
    name: "Instagram",
    className:
      "bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
  },
  {
    link: "https://www.facebook.com/werlink.co?mibextid=ZbWKwL",
    Icon: Facebook,
    name: "Facebook",
    className: "bg-blue-700/5 hover:bg-blue-700",
  },
  {
    link: "tel:+963 994778777",
    Icon: "/whatsapp.svg",
    name: "Whatsapp",
    className: "bg-green-700/5 hover:bg-green-700",
  },
  {
    link: "mailto:info@r-link.io",
    Icon: Mail,
    name: "Mail",
    className: "bg-red-700/5 hover:bg-red-700",
  },
  {
    link: "https://www.linkedin.com/company/werlinkco/",
    Icon: Linkedin,
    name: "Linkedin",
    className: "bg-sky-700/10 hover:bg-sky-700",
  },
];
