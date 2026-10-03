import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BookingWidget from './components/BookingWidget';
import DestinationCards from './components/DestinationCards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroBanner />
        <BookingWidget />
        <DestinationCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
