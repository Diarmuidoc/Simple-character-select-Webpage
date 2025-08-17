import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';
import VSPage from './VSPage';
import './styles.css';
import { characters } from './characters';

function App() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleCharacterSelect = (character) => {
    if (selectedCharacters.length < 2 && !selectedCharacters.includes(character)) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const resetSelection = () => {
    setSelectedCharacters([]);
  };

  return (
    <div className="app">
      {selectedCharacters.length === 2 ? (
        <VSPage characters={selectedCharacters} onBack={resetSelection} />
      ) : (
        <CharacterSelect
          characters={characters}
          selected={selectedCharacters}
          onSelect={handleCharacterSelect}
        />
      )}
    </div>
  );
}

export default App;