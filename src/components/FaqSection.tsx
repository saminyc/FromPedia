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
      <div className="mb-9 border-l-2 border-red-500 pl-5 sm:pl-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-red-400">The unknown, decoded</p>
        <h2 id="faq-heading" className="font-serif text-4xl font-black uppercase tracking-tight text-stone-100 sm:text-5xl">Frequently asked <span className="text-red-400">questions</span></h2>
        <p className="mt-4 max-w-2xl leading-7 text-stone-400">A few clues for those who have found their way into the town.</p>
      </div>

      <div className="divide-y divide-stone-700/70 border-y border-stone-700/70">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} isOpen={openFAQId === faq.id} onToggle={() => toggleFAQ(faq.id)} />
        ))}
      </div>
    </section>
  );
}
