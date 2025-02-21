import React, { useState } from 'react';
import axios from 'axios';
import './app.css';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {

  const [inputJson, setInputJson] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

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

      const response = await axios.post('http://localhost:3000/bfhl', parsedData);
      setResponseData(response.data);
    } catch (err) {
      setError('Error calling backend API');
    }
  };

  // Handle checkbox changes to update filter options.
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
      {/* Title (your roll number) */}
      <h1 className="title">22BCS80289</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          className="input-textarea"
          rows="10"
          cols="50"
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
