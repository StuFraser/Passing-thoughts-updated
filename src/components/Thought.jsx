import React, { useEffect, useState } from 'react';
import "./Thought.css";

export function Thought({ thought, removeThought }) {
  const [timeLeft, setTimeLeft] = useState(thought.expiresAt - Date.now());

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  // Progress updater
  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = thought.expiresAt - Date.now();
      setTimeLeft(remaining);
    }, 50);

    return () => clearInterval(interval);
  }, [thought]);

  // Auto-remove thought
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => clearTimeout(timeout);
  }, [thought, removeThought]);

    const progress = Math.max(timeLeft / 15000, 0);

  return (
    <li className="Thought">
      {/* Progress fill */}
      <div
        className="progress-fill"
        style={{ transform: `scaleX(${progress})` }}
      />
      
      {/* Delete button */}
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>

      {/* Thought text */}
      <div className="text">{thought.text}</div>
    </li>
  );
}
