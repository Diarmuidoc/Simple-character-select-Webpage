import React from 'react';
import './styles.css';

export default function VSPage({ characters, onBack }) {
  return (
    <div className="vs-screen">
        <div className="character-box left">
            <img src={characters[0].image} alt={characters[0].name} />
        </div>
        <div className="character-name name-left">{characters[0].name}</div>

        <div className="character-box right">
            <img src={characters[1].image} alt={characters[1].name} />
        </div>
        <div className="character-name name-right">{characters[1].name}</div>

        <button className="back-btn" onClick={onBack}>← Back to Select</button>
    </div>
  );
}