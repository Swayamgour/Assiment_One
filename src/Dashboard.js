import React from 'react';
import PricingSection from './PricingSection';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="pricing-container">
          <PricingSection title="Basic" price="$19.99" />
          <PricingSection title="Standard" price="$39.99" />
          <PricingSection title="Premium" price="$59.99" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
