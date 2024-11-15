import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    termsAccepted: false,
    feedback: "",
    favoriteFood: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="form-container">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        {/* Terms & Conditions*/}
        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>

        {/* Favorite Food */}
        <div className="form-group">
          <label htmlFor="ffavoriteFood">Favorite Food:</label>
          <select
            id="favoriteFood"
            name="favoriteFood"
            value={formData.favoriteFood}
            onChange={handleChange}
            required
          >
            <option value="">Select a food</option>
            <option value="red">Rice</option>
            <option value="green">Beans</option>
            <option value="blue">Eba</option>
            <option value="yellow">Spaghetti</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Feedback */}
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            placeholder="Your feedback here..."
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {}
      <p>
        <strong>Submitted Data:</strong>
        <br />
        Name: {formData.name}
        <br />
        Age: {formData.age}
        <br />
        Gender: {formData.gender}
        <br />
        Terms Accepted: {formData.termsAccepted ? "Yes" : "No"}
        <br />
        Favorite Food: {formData.favoriteFood}
        <br />
        Feedback: {formData.feedback}
      </p>
    </div>
  );
};

export default App;
