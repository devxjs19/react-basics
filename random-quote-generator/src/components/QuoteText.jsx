import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteText = ({ quote }) => {
  return (
    <>
      <blockquote>
        <FaQuoteLeft className="icon__quotation" />
        {quote.content}
        <FaQuoteRight className="icon__quotation" />
      </blockquote>
      <footer>
        <span>&#126;</span> {quote.author}
      </footer>
    </>
  );
};

export default QuoteText;
