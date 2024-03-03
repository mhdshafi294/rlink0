import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    value: "/" as const,
  },
  {
    label: "Our clients",
    value: "/#partners" as const,
  },
  {
    label: "Our services",
    value: "/#services" as const,
  },
  {
    label: "Our solutions",
    value: "/#projects" as const,
  },
  {
    label: "Why choose us",
    value: "/#whyUs" as const,
  },
  {
    label: "FAQ",
    value: "/#faq" as const,
  },
  // {
  //   label: "White Label",
  //   value: "/white-label" as const,
  // },
];

export const SERVICES = [
  {
    label: "Power Digital Marketing",
    description:
      "From crafting compelling campaigns to navigating the dynamic landscape of social media, our strategies are engineered to electrify your reach and spark meaningful connections with your audience.",
    icon: "/marketing.svg",
  },
  {
    label: "Software Development",
    description:
      "Architect digital masterpieces tailored to your needs. Whether you're a startup seeking to disrupt the market or an enterprise aiming to optimize operations Transform your ideas into reality with our Software Development expertise.",
    icon: "/software.svg",
  },
  {
    label: "Creative Graphic Designer",
    description:
      "We're storytellers who paint narratives with pixels. From captivating logos to stunning brand identities, our designs evoke emotion, inspire action, and leave a lasting impression. Elevate your visuals with our Creative Graphic Design, where every pixel tells a story.",
    icon: "/design.svg",
  },
  {
    label: "Operation Management",
    description:
      "In the ever-evolving landscape of business, effective operations are the cornerstone of success. From optimising processes to streamlining workflows, Set sail for success with Operation Management which keeps your business on course, no matter the waters ahead.",
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

export const SOLUTIONS = [
  {
    label: "ERP system",
    description:
      "All-in-one education ERP for schools, colleges, and training centers is a comprehensive software solution that integrates various administrative, academic, and management processes into a single platform.",
    icon: "/project1.svg",
  },
  {
    label: "Virtual try on",
    description:
      "A technology that allows users to virtually experience how certain products, such as clothing, eyeglasses, makeup, or accessories, will look on them",
    icon: "/project2.svg",
  },
  {
    label: "Virtual fitting room",
    description:
      "An advanced technology that allows users to try on clothing and accessories in a digital environment.",
    icon: "/project3.svg",
  },
  {
    label: "Virtual tour system",
    description:
      "A technology that allows users to explore and navigate a virtual representation of a real-world location or environment.",
    icon: "/project4.svg",
  },
];

export const FAQs = [
  {
    question: "What is R-link?",
    answer:
      "R-link is an agency that specializes in providing marketing, design, development, and operation services to businesses.",
  },
  {
    question: "Where is R-link located?",
    answer: "Rlink is located in Damascus, Syria.",
  },
  {
    question: "What marketing services do you provide?",
    answer:
      "R-link offers a comprehensive range of marketing services including digital marketing, social media marketing, content marketing, search engine optimization (SEO), email marketing, and more.",
  },
  {
    question: "What design services do you provide?",
    answer:
      "Our design services encompass graphic design, branding, logo design, web design, UI/UX design, and print design.",
  },
  {
    question: "What development services do you provide?",
    answer:
      "We specialize in website development, mobile app development, e-commerce solutions, custom software development, and web application development.",
  },
  {
    question: "How can I communicate with R-link?",
    answer:
      "You can communicate with R-link via email or any preferred online platform",
  },
  {
    question: "What are your working hours?",
    answer:
      "Our working hours are from Sunday to Thursday, from 9:00 AM to 5:00 PM.",
  },
  // {
  //   question:
  //     "How can R-link help me grow my startup or my business in general?",
  //   answer:
  //     "R-link can help you grow your startup or business by providing tailored marketing strategies to increase your brand visibility, engaging design solutions to enhance your brand identity, and cutting-edge development services to build robust digital platforms that drive growth and profitability. We work closely with our clients to understand their goals and challenges, and we leverage our expertise to deliver effective solutions that yield measurable results. ",
  // },
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
    className: "bg-[#4267B210] hover:bg-[#4267B2]",
  },
  {
    link: "tel:+963 994778777",
    Icon: "/whatsapp.svg",
    name: "Whatsapp",
    className: "bg-[#25D36610] hover:bg-[#25D366]",
  },
  {
    link: "mailto:info@r-link.io",
    Icon: Mail,
    name: "Mail",
    className: "bg-[#923a2a10] hover:bg-[#923a2a]",
  },
  {
    link: "https://www.linkedin.com/company/werlinkco/",
    Icon: Linkedin,
    name: "Linkedin",
    className: "bg-[#0e76a810] hover:bg-[#0e76a8]",
  },
];
