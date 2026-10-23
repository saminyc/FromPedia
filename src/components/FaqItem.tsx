type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="faq-item py-1">
      <h3>
        <button
          className="group flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-lg font-bold text-stone-200 transition hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-red-400 sm:py-6 sm:text-xl"
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span>{question}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-stone-600 font-sans text-xl font-normal text-red-400 transition group-hover:border-red-400">{isOpen ? "−" : "+"}</span>
        </button>
      </h3>

      {isOpen && <p className="max-w-3xl pb-6 pr-12 leading-7 text-stone-400">{answer}</p>}
    </div>
  );
}

export default FAQItem;
