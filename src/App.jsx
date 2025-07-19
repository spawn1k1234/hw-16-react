// import React, { useState } from "react";
// import FeedbackOptions from "./components/FeedbackOptions";
// import Statistics from "./components/Statistics";
// import Section from "./components/Section";
// import Notification from "./components/Notification";

// const App = () => {
//   const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

//   const handleFeedback = (type) => {
//     setFeedback((prev) => ({
//       ...prev,
//       [type]: prev[type] + 1,
//     }));
//   };

//   const countTotalFeedback = () => {
//     return feedback.good + feedback.neutral + feedback.bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total ? Math.round((feedback.good / total) * 100) : 0;
//   };

//   const total = countTotalFeedback();
//   const positivePercentage = countPositiveFeedbackPercentage();

//   return (
//     <div className="cont">
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={["good", "neutral", "bad"]}
//           onLeaveFeedback={handleFeedback}
//         />
//       </Section>

//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             good={feedback.good}
//             neutral={feedback.neutral}
//             bad={feedback.bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="неттттууууу" />
//         )}
//       </Section>
//     </div>
//   );
// };

// export default App;
import React from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import { FeedbackProvider, useFeedback } from "./context/FeedbackContext";

const Content = () => {
  const { feedback, handleFeedback, total, positivePercentage } = useFeedback();

  return (
    <div className="cont">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="неттттууууу" />
        )}
      </Section>
    </div>
  );
};

const App = () => (
  <FeedbackProvider>
    <Content />
  </FeedbackProvider>
);

export default App;
