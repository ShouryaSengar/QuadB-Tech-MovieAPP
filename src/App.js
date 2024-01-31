import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowsList from './components/showlist/ShowsList';
import ShowSummary from './components/showsummary/ShowSummary';
import MovieTicketBooking from './components/movieticketbooking/MovieTicketBooking';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="/summary/:showId" element={<ShowSummary />} />
          <Route path="/movie-ticket-booking/:showId" element={<MovieTicketBooking />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
