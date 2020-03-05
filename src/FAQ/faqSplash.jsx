import React from "react";
import FAQAccordion from "./faqAccordion";

const FaqSplash = () => {
  return (
    <div className="faqSplashHolder">
      <div className="faqSplash">
        <div>
          <h2>Maybe we’ve already answered one of your questions.</h2>
          <p>
            Can’t find what you’re looking for? Browse our full collection of
            frequently asked questions.
          </p>
          <div>
            <a href="/faq">View FAQ’s</a>
          </div>
        </div>
        <FAQAccordion count={5} />
      </div>
    </div>
  );
};

export default FaqSplash;
