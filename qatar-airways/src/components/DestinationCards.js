import React from 'react';
import './DestinationCards.css';

const destinations = [
  {
    id: 1,
    title: 'Exclusive offer for Visa card holders',
    description: '',
    cta: 'Book now',
    badge: 'VISA',
    gradient: 'linear-gradient(135deg, #b0c4de 0%, #87CEEB 40%, #6a8caf 100%)',
    accent: '#1a3a6b',
    icon: '✈',
  },
  {
    id: 2,
    title: 'More connections to the Americas',
    description: 'Fares from BDT 122,347*',
    cta: 'Book now',
    badge: null,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d3561 30%, #4a5568 60%, #718096 100%)',
    accent: '#e2b04a',
    icon: '🌉',
  },
  {
    id: 3,
    title: 'Where will you go next?',
    description: '',
    cta: 'Explore destinations',
    badge: null,
    gradient: 'linear-gradient(135deg, #1565C0 0%, #1976D2 40%, #d32f2f 70%, #c62828 100%)',
    accent: '#ff9800',
    icon: '🌉',
  },
  {
    id: 4,
    title: 'Welcoming you together',
    description: 'Greater access to more destinations with our partner American Airline',
    cta: 'Learn more',
    badge: null,
    gradient: 'linear-gradient(135deg, #880e4f 0%, #ad1457 40%, #c2185b 70%, #e91e63 100%)',
    accent: '#f8bbd0',
    icon: '✈',
  },
];

const DestinationCards = () => {
  return (
    <section className="destinations-section">
      <h2 className="section-title">Go where it's happening</h2>
      <div className="cards-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="dest-card">
            <div
              className="card-image"
              style={{ background: dest.gradient }}
            >
              {/* Decorative elements */}
              <div className="card-deco">
                <span className="deco-icon">{dest.icon}</span>
                {dest.badge && (
                  <span className="card-badge">{dest.badge}</span>
                )}
              </div>
              {/* Plane silhouette overlay */}
              <div className="plane-overlay">✈</div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{dest.title}</h3>
              {dest.description && (
                <p className="card-desc">{dest.description}</p>
              )}
              <a href="/destinations" className="card-cta">
                {dest.cta} <span className="cta-arrow">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCards;
