import React from 'react';
import './StripeDivider.css';

export default function StripeDivider() {
  return (
    <div className="stripe-divider" aria-hidden="true">
      <div className="stripe-top" />
      <div className="stripe-bottom" />
    </div>
  );
}
