import React, { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleFeedback,
        total: countTotalFeedback(),
        positivePercentage: countPositiveFeedbackPercentage(),
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
