import React, { useState } from 'react';

// Define the classes
const classes = {
  wizard: {
    name: 'Wizard',
    description: 'Master of arcane magic.',
  },
  warrior: {
    name: 'Warrior',
    description: 'Mighty warrior skilled in combat.',
  },
  thief: {
    name: 'Thief',
    description: 'Stealthy rogue skilled in deception.',
  },
  ranger: {
    name: 'Ranger',
    description: 'Skilled hunter and tracker of the wild.',
  },
};

const CharacterCreation = () => {
  const [selectedClass, setSelectedClass] = useState('wizard');
  const [attributePoints, setAttributePoints] = useState(10);
  const [attributes, setAttributes] = useState({
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  });

  const handleClassSelect = className => {
    setSelectedClass(className);
  };

  const handleAttributeChange = (attribute, value) => {
    const updatedAttributes = { ...attributes, [attribute]: value };
    setAttributes(updatedAttributes);
  };

  return (
    <div>
      <h2>Character Creation</h2>
      <p>Select your class:</p>
      <div>
        {Object.keys(classes).map(className => (
          <button
            key={className}
            onClick={() => handleClassSelect(className)}
            disabled={className === selectedClass}
          >
            {classes[className].name}
          </button>
        ))}
      </div>
      <div>
        <h3>{classes[selectedClass].name}</h3>
        <p>{classes[selectedClass].description}</p>
      </div>
      <div>
        <h4>Attribute Points: {attributePoints}</h4>
        {Object.keys(attributes).map(attribute => (
          <div key={attribute}>
            <span>
              {attribute}: {attributes[attribute]}
            </span>
            <button
              onClick={() =>
                handleAttributeChange(attribute, attributes[attribute] + 1)
              }
              disabled={attributePoints === 0 || attributes[attribute] === 10}
            >
              +
            </button>
            <button
              onClick={() =>
                handleAttributeChange(attribute, attributes[attribute] - 1)
              }
              disabled={attributes[attribute] === 1}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCreation;
