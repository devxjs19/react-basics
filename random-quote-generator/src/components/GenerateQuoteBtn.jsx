const GenerateQuoteBtn = ({ onGetQuote, isLoading, isSpeaking }) => {
  return (
    <button
      onClick={onGetQuote}
      disabled={isLoading || isSpeaking}
      className="btn__generate-quote"
    >
      Generate
    </button>
  );
};

export default GenerateQuoteBtn;
