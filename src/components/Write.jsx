// src/components/Write.jsx
import React, { useState } from 'react';

const Write = () => {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');

  const handleSave = () => setSavedNote(note);

  return (
    <div className="write-page">
      <h2>Write a Note</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={handleSave}>Save Note</button>
      {savedNote && (
        <div className="saved-note">
          <h3>Your Saved Note:</h3>
          <p>{savedNote}</p>
        </div>
      )}
    </div>
  );
};

export default Write;
