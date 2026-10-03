import React from 'react';
import './Footer.css';

const Footer = () => {
  const links = {
    'About Qatar Airways': [
      { label: 'About us', href: '/about' },
      { label: 'News', href: '/news' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investor relations', href: '/investors' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
    'Help': [
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'Travel advisories', href: '/advisories' },
      { label: 'Baggage information', href: '/baggage' },
    ],
    'Explore': [
      { label: 'Destinations', href: '/destinations' },
      { label: 'Offers & promotions', href: '/offers' },
      { label: 'Qatar Duty Free', href: '/duty-free' },
      { label: 'Cargo', href: '/cargo' },
      { label: 'Holidays', href: '/holidays' },
    ],
    'Privilege Club': [
      { label: 'About Privilege Club', href: '/privilege-club' },
      { label: 'Earn Avios', href: '/earn-avios' },
      { label: 'Spend Avios', href: '/spend-avios' },
      { label: 'Partners', href: '/partners' },
      { label: 'Shop', href: '/shop' },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <div className="f-logo-icon">✦</div>
          <div>
            <div className="f-qatar">QATAR</div>
            <div className="f-airways">AIRWAYS</div>
          </div>
        </div>

        <div className="footer-links-grid">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="footer-col">
              <h4>{category}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com/qatarairways" target="_blank" rel="noreferrer" className="social-btn">f</a>
          <a href="https://twitter.com/qatarairways" target="_blank" rel="noreferrer" className="social-btn">𝕏</a>
          <a href="https://linkedin.com/company/qatar-airways" target="_blank" rel="noreferrer" className="social-btn">in</a>
          <a href="https://youtube.com/qatarairways" target="_blank" rel="noreferrer" className="social-btn">▶</a>
          <a href="https://instagram.com/qatarairways" target="_blank" rel="noreferrer" className="social-btn">📷</a>
        </div>
        <div className="footer-legal">
          <span>© 2026 Qatar Airways. All rights reserved.</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
