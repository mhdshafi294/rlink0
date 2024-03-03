import Container from "./../Container";
import ExpandedText from "../ExpandedText";
import ExpandedTextLong from "../ExpandedTextLong";

import { FAQs } from "@/config";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="bg-gradient-to-b from-[#021c18] to-black overflow-hidden py-0 md:pt-3 md:pb-10 flex flex-col justify-start items-center"
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
            <ExpandedTextLong
              label={
                "How can R-link help me grow my startup or my business in general?"
              }
              details={
                "R-link can help you grow your startup or business by providing tailored marketing strategies to increase your brand visibility, engaging design solutions to enhance your brand identity, and cutting-edge development services to build robust digital platforms that drive growth and profitability. We work closely with our clients to understand their goals and challenges, and we leverage our expertise to deliver effective solutions that yield measurable results. "
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
