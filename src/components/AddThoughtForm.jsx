import React, { useState, useEffect } from 'react';

import { generateId, getNewExpirationTime } from '../utilities';

export function AddThoughtForm(props) {
  const [thoughtText, setThoughtText] = useState('');

  const handleTextChange = (target) => {
    setThoughtText(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thoughtText) {
      const newThought = {
        id: generateId(),
        text: thoughtText,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(newThought);
      setThoughtText('');
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={thoughtText}
        onChange={(e) => handleTextChange(e.target)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
