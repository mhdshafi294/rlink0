import Container from "./../Container";
import ExpandedText from "../ExpandedText";

import { FAQs } from "@/config";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="bg-gradient-to-b from-[#021c18] to-black overflow-hidden py-28 md:py-10 md:min-h-screen flex flex-col justify-start items-center"
    >
      <Container>
        <div className="flex flex-col justify-start items-center">
          <h2 className="mb-8 font-normal text-slate-300 leading-loose tracking-tight text-6xl">
            FAQ
          </h2>
          <div className="flex flex-col justify-start items-center">
            {FAQs.map((question, index) => {
              return index === 0 ? (
                <ExpandedText
                  key={index}
                  label={question.question}
                  details={question.answer}
                  isOpen={true}
                />
              ) : (
                <ExpandedText
                  key={index}
                  label={question.question}
                  details={question.answer}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
