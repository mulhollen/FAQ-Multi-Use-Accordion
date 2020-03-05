/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useContext } from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import faqData from "../faq.json";

const Faq = count => {
  const [length, updateLength] = useState(
    count.count !== 0 ? count.count : null
  );
  const [faq, updateFaq] = useState(faqData);

  useEffect(() => {
    if (length === null) updateLength(faq.length);
    updateFaq(faq);
  }, []);

  return (
    <>
      {faq && (
        <div className="contentPage__faqAccordion">
          <Accordion atomic>
            {faq.slice(0, length).map((item, index) => (
              <React.Fragment key={index}>
                {item.answer && (
                  <AccordionItem id={index} title={item.question}>
                    <p>{item.answer}</p>
                  </AccordionItem>
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default Faq;
