import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PriceCard({ plan, price, features }) {
  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <div className="price">${price}<span>/month</span></div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn">Choose Plan</button>
    </div>
  );
}

// App component
function App() {
  const priceCardData = [
    {
      plan: 'Basic',
      price: 10,
      features: ['Feature 1', 'Feature 2', 'Feature 3','Feature 4'],
    },
    {
      plan: 'Standard',
      price: 20,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      plan: 'Premium',
      price: 30,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ];

  return (
    <div className="app" style={{ backgroundColor: 'blue', padding: '20px' }}>
      {priceCardData.map((data, index) => (
        <div key={index} className="card-wrapper">
          <div className="card">
            <PriceCard plan={data.plan} price={data.price} features={data.features} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App
