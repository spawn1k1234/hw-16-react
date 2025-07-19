// import React from "react";

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//       {options.map((option) => (
//         <button key={option} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default FeedbackOptions;
import React, { useRef, useEffect } from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (firstButtonRef.current) {
      firstButtonRef.current.focus(); // Фокус на первую кнопку при рендере
    }
  }, []);

  return (
    <div>
      {options.map((option, index) => (
        <button
          key={option}
          ref={index === 0 ? firstButtonRef : null}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
