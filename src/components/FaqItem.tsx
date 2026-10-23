import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {question}
        </button>
      </h3>

      {isOpen && <p>{answer}</p>}
    </div>
  );
}