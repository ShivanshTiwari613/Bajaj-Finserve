import React from 'react';

const ResponseDisplay = ({ responseData, selectedOptions }) => {
  const displayData = {};
  if (selectedOptions.includes('Numbers')) {
    displayData.numbers = responseData.numbers;
  }
  if (selectedOptions.includes('Alphabets')) {
    displayData.alphabets = responseData.alphabets;
  }
  if (selectedOptions.includes('Highest alphabet')) {
    displayData.highest_alphabet = responseData.highest_alphabet;
  }

  return (
    <div className="response-container">
      <h2>Response Data:</h2>
      <pre>{JSON.stringify(displayData, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
