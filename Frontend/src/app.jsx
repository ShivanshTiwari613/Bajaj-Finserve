import React, { useState } from 'react';
import axios from 'axios';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

const App = () => {
  // State for input JSON, API response, errors, and filter options.
  const [inputJson, setInputJson] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    let parsedData;
    try {
      parsedData = JSON.parse(inputJson);
    } catch (err) {
      setError('Invalid JSON input');
      return;
    }

    try {
      // For local testing, use: 'http://localhost:3000/bfhl'
      // Replace with your deployed backend URL as needed.
      const response = await axios.post('https://bajaj-finserve-l259.onrender.com/bfhl', parsedData);
      setResponseData(response.data);
    } catch (err) {
      setError('Error calling backend API');
    }
  };

  // Function to update filter options from checkboxes.
  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(item => item !== value));
    }
  };

  return (
    <div className="app-container">
      {/* Title is set to your roll number */}
      <h1 className="title">ABCD123</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          className="input-textarea"
          rows="10"
          value={inputJson}
          onChange={(e) => setInputJson(e.target.value)}
          placeholder='Enter JSON, e.g. { "data": ["A", "C", "z"] }'
        ></textarea>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {error && <p className="error-text">{error}</p>}
      {responseData && (
        <div className="options-container">
          <h3>Select Options to Display:</h3>
          <label>
            <input type="checkbox" value="Numbers" onChange={handleOptionChange} />
            Numbers
          </label>
          <br />
          <label>
            <input type="checkbox" value="Alphabets" onChange={handleOptionChange} />
            Alphabets
          </label>
          <br />
          <label>
            <input type="checkbox" value="Highest alphabet" onChange={handleOptionChange} />
            Highest alphabet
          </label>
          <br />
        </div>
      )}
      {responseData && (
        <ResponseDisplay responseData={responseData} selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default App;
