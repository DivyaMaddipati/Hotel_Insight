import React, { useState } from 'react';
import './Filters.css'; // Import the corresponding CSS file

function Filters() {
  // Define state variables for user inputs
  const [budgetRange, setBudgetRange] = useState(''); // Budget range input
  const [locationRange, setLocationRange] = useState(''); // Location range input (in kilometers)
  const [reviewRating, setReviewRating] = useState(''); // Review rating input
  const [userInputData, setUserInputData] = useState([]); // Array to store user input data

  // Define options for review rating dropdown
  const reviewRatingOptions = [
    'Rating',
    '4 Stars & Up',
    '5 Stars Only',
    // Add more rating options as needed
  ];

  // Handle changes in budget range input
  const handleBudgetRangeChange = (e) => {
    setBudgetRange(e.target.value);
  };

  // Handle changes in location range input
  const handleLocationRangeChange = (e) => {
    setLocationRange(e.target.value);
  };

  // Handle changes in review rating input
  const handleReviewRatingChange = (e) => {
    setReviewRating(e.target.value);
  };

  // Handle form submission to store user input in an array of objects
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to represent the user's input
    const userInput = {
      budgetRange,
      locationRange,
      reviewRating,
    };

    // Add the user's input object to the array
    setUserInputData([...userInputData, userInput]);
    console.log(userInput);

    // Reset the input fields after submission
    // setBudgetRange('');
    // setLocationRange('');
    // setReviewRating('');
  };

  return (
    <div className="Filters">
      <h2>Filters</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        {/* ... (input fields and controls) */}
        <div className="filter-item">
            <br></br>
            <br></br>
          <label htmlFor="budget">Budget</label>
          <input
            type="range"
            id="budget"
            min="0"
            max="1000"
            step="10"
            value={budgetRange}
            onChange={handleBudgetRangeChange}
          />
          <span className="budget-value">${budgetRange}</span>
        </div>
        <br></br>
        <div className="filter-item">
          <label htmlFor="locationRange">Location Range</label>
          <input
            type="range"
            id="locationRange"
            min="0"
            max="100"
            step="1"
            value={locationRange}
            onChange={handleLocationRangeChange}
          />
          <span className="location-range-value">{locationRange} km</span>
        </div>
        <br></br>
        <div className="filter-item">
          {/* <label htmlFor="reviewRating">Review Rating:</label> */}
          <select
            id="reviewRating"
            value={reviewRating}
            onChange={handleReviewRatingChange}
          >
            {reviewRatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Add a "Search" button to trigger the search based on selected filters */}
        <button type="submit">Search</button>
      </form>

      {/* Display the user input data */}
      {/* <div>
       <h3>User Input Data:</h3>
        <ul>
          {userInputData.map((input, index) => (
            <li key={index}>{JSON.stringify(input)}</li>
          ))}
        </ul> 
      </div> */}
    </div>
  );
}

export default Filters;
