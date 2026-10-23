import { useState } from "react";
import { faqs } from "../data/faqs";
import FaqItem from "./FaqItem";

export function FaqSection() {
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);

  function toggleFAQ(id: number) {
    setOpenFAQId((previousId) => {
      return previousId === id ? null : id;
    });
  }

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>

      {faqs.map((faq) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openFAQId === faq.id}
          onToggle={() => toggleFAQ(faq.id)}
        />
      ))}
    </section>
  );
}