import React, { useState } from 'react';
import './BookingWidget.css';

const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState('flight');
  const [tripType, setTripType] = useState('return');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('2026-10-03');
  const [returnDate, setReturnDate] = useState('2026-10-10');
  const [passengers, setPassengers] = useState('1 Passenger Economy');
  const [useAvios, setUseAvios] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);

  const tabs = [
    { id: 'flight', icon: '✈', label: 'Book a flight' },
    { id: 'stopover', icon: '🧳', label: 'Stopover / Packages' },
    { id: 'checkin', icon: '📋', label: 'Manage / Check in' },
    { id: 'status', icon: '📡', label: 'Flight status' },
  ];

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="booking-widget-wrapper">
      <div className="booking-widget">
        {/* Tabs */}
        <div className="booking-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'flight' && (
          <div className="booking-content">
            {/* Trip Type */}
            <div className="trip-type">
              {['return', 'one-way', 'multi-city'].map((type) => (
                <label key={type} className="radio-label">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">
                    {type === 'one-way' ? 'One way' : type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                  </span>
                </label>
              ))}
            </div>

            {/* Search Fields */}
            <div className="search-fields">
              <div className="field-group city-fields">
                <div className="input-wrapper">
                  <label>From</label>
                  <input
                    type="text"
                    placeholder="City or airport"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <button className="swap-btn" onClick={swapCities} title="Swap cities">
                  ⇄
                </button>
                <div className="input-wrapper">
                  <label>To</label>
                  <input
                    type="text"
                    placeholder="City or airport"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
              </div>

              <div className="field-group date-fields">
                <div className="input-wrapper">
                  <label>Departure</label>
                  <input
                    type="date"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </div>
                {tripType === 'return' && (
                  <div className="input-wrapper">
                    <label>Return</label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                )}
                <div className="input-wrapper">
                  <label>Passengers / Class</label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="passengers-select"
                  >
                    <option>1 Passenger Economy</option>
                    <option>1 Passenger Business</option>
                    <option>1 Passenger First</option>
                    <option>2 Passengers Economy</option>
                    <option>2 Passengers Business</option>
                    <option>3 Passengers Economy</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="booking-bottom">
              <label className="avios-label">
                <input
                  type="checkbox"
                  checked={useAvios}
                  onChange={(e) => setUseAvios(e.target.checked)}
                />
                <span>Book using Avios</span>
              </label>

              <div className="booking-actions">
                <button
                  className="promo-btn"
                  onClick={() => setPromoOpen(!promoOpen)}
                >
                  + Add promo code
                </button>
                <button className="search-btn">Search flights</button>
              </div>
            </div>

            {promoOpen && (
              <div className="promo-field">
                <input type="text" placeholder="Enter promo code" className="promo-input" />
              </div>
            )}
          </div>
        )}

        {activeTab === 'checkin' && (
          <div className="booking-content alt-content">
            <div className="search-fields">
              <div className="field-group city-fields">
                <div className="input-wrapper">
                  <label>Booking Reference</label>
                  <input type="text" placeholder="e.g. ABC123" />
                </div>
                <div className="input-wrapper">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>
            </div>
            <div className="booking-bottom">
              <div></div>
              <button className="search-btn">Manage booking</button>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div className="booking-content alt-content">
            <div className="search-fields">
              <div className="field-group city-fields">
                <div className="input-wrapper">
                  <label>Flight Number</label>
                  <input type="text" placeholder="e.g. QR 401" />
                </div>
                <div className="input-wrapper">
                  <label>Date</label>
                  <input type="date" defaultValue="2026-10-03" />
                </div>
              </div>
            </div>
            <div className="booking-bottom">
              <div></div>
              <button className="search-btn">Check status</button>
            </div>
          </div>
        )}

        {activeTab === 'stopover' && (
          <div className="booking-content alt-content">
            <p className="stopover-msg">
              🌟 Experience Qatar with our exclusive stopover packages. Explore Doha between connecting flights!
            </p>
            <div className="booking-bottom">
              <div></div>
              <button className="search-btn">Explore packages</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingWidget;
