// MovieTicketBooking.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieTicketBooking.css';

const MovieTicketBooking = () => {
  const { showId } = useParams();
  const [movieName, setMovieName] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    // Make an additional API call to get Movie Name and Language
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieName(data.name); // Assuming 'name' is the property for movie name
        setLanguage(data.language); // Assuming 'language' is the property for language
      });
  }, [showId]);

  return (
    <div>
      <h1 className='head-top'>Book the Show</h1>
      <div className="form-container">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Movie Name</label>
              <input type="text" className="form-control" id="inputEmail4" value={movieName} readOnly />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Language</label>
              <input type="text" className="form-control" id="inputPassword4" value={language} readOnly />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Name</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Number of tickets</label>
            <input type="number" className="form-control" id="inputAddress2" />
          </div>
          <button type="submit" className="btn btn-primary">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default MovieTicketBooking;
