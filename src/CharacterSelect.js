import React, { useState } from 'react';

export default function CharacterSelect({ characters, selected, onSelect }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="character-select">
      <h1>Select Your Fighters</h1>
      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className={`character-card ${selected.includes(char) ? 'selected' : ''}`}
            onClick={() => onSelect(char)}
            onMouseEnter={() => setHoveredId(char.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={hoveredId === char.id && char.hoverImage ? char.hoverImage : char.image}
              alt={char.name}
            />
            <div className="character-name">{char.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

//no hover
// import React from 'react';

// export default function CharacterSelect({ characters, selected, onSelect }) {
//   return (
//     <div className="character-select">
//       <h1>Select Your Fighters</h1>
//       <div className="character-grid">
//         {characters.map((char) => (
//           <div
//             key={char.id}
//             className={`character-card ${
//               selected.includes(char) ? 'selected' : ''
//             }`}
//             onClick={() => onSelect(char)}
//           >
//             <img src={char.image} alt={char.name} />
//             <div className="character-name">{char.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }