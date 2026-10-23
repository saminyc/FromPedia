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
    <div className="faq-item">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {question} {isOpen ? "−" : "+"}
        </button>
      </h3>

      {isOpen && <p>{answer}</p>}
    </div>
  );
}

export default FAQItem;