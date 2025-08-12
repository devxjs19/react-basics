import { useState, useEffect } from "react";

import Header from "./Header";
import PromptMessage from "./PromptMessage";
import Error from "./Error";
import QuoteText from "./QuoteText";
import GenerateQuoteBtn from "./GenerateQuoteBtn";
import UserControls from "./UserControls";

const QuoteCard = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleGetQuote = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await fetch("https://api.quotable.io/quotes/random");
      const quotes = await result.json();
      setQuote(quotes[0]);
    } catch (error) {
      setError(error.message || "Error loading quote.");
      console.error(error);
    } finally {
      setIsLoading(false);
      setError("");
    }
  };

  const handleReadAloud = () => {
    if (!quote) return;

    // Stop any ongoing speech first
    speechSynthesis.cancel();

    const textToSpeak = `${quote.content} — ${quote.author}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // When it starts speaking
    utterance.onstart = () => setIsSpeaking(true);

    // When it finishes speaking
    utterance.onend = () => setIsSpeaking(false);

    // Optional: Handle errors
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const handleShareQuote = async () => {
    if (!quote) return;

    const shareText = `"${quote.content}" — ${quote.author}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Random Quote",
          text: shareText,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  // Cleanup: stop speaking if component unmounts
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="card">
      <Header />
      {error ? (
        <Error />
      ) : quote ? (
        <QuoteText quote={quote} />
      ) : (
        <PromptMessage />
      )}

      <GenerateQuoteBtn
        onGetQuote={handleGetQuote}
        isLoading={isLoading}
        isSpeaking={isSpeaking}
      />

      {quote && (
        <UserControls
          onReadAloud={handleReadAloud}
          onShareQuote={handleShareQuote}
        />
      )}
    </div>
  );
};

export default QuoteCard;
