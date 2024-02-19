import React, { useState } from 'react';

// Define the classes
const classes = {
  wizard: {
    name: 'Wizard',
    description: 'Master of arcane magic.',
    modifiers: {
      intelligence: 2,
      wisdom: 1,
    },
    hitPoints: 6,
    armorClass: 10,
    startingSkills: ['Arcana', 'History'],
  },
  warrior: {
    name: 'Warrior',
    description: 'Mighty warrior skilled in combat.',
    modifiers: {
      strength: 2,
      constitution: 1,
    },
    hitPoints: 10,
    armorClass: 14,
    startingSkills: ['Athletics', 'Intimidation'],
  },
  thief: {
    name: 'Thief',
    description: 'Stealthy rogue skilled in deception.',
    modifiers: {
      dexterity: 2,
      charisma: 1,
    },
    hitPoints: 8,
    armorClass: 12,
    startingSkills: ['Stealth', 'Sleight of Hand'],
  },
  ranger: {
    name: 'Ranger',
    description: 'Skilled hunter and tracker of the wild.',
    modifiers: {
      dexterity: 1,
      wisdom: 2,
    },
    hitPoints: 8,
    armorClass: 13,
    startingSkills: ['Survival', 'Nature'],
  },
};

const CharacterCreation = () => {
  const [selectedClass, setSelectedClass] = useState('wizard');
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
    setAttributes({ ...attributes, ...classes[className].modifiers });
  };

  const getTotalHitPoints = () => {
    return classes[selectedClass].hitPoints + attributes.constitution;
  };

  const getTotalArmorClass = () => {
    return (
      classes[selectedClass].armorClass +
      Math.floor((attributes.dexterity - 10) / 2)
    );
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
        <p>
          Starting Skills: {classes[selectedClass].startingSkills.join(', ')}
        </p>
      </div>
      <div>
        <h4>Attributes</h4>
        {Object.keys(attributes).map(attribute => (
          <div key={attribute}>
            <span>
              {attribute}: {attributes[attribute]}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h4>Character Stats</h4>
        <p>Hit Points: {getTotalHitPoints()}</p>
        <p>Armor Class: {getTotalArmorClass()}</p>
      </div>
    </div>
  );
};

export default CharacterCreation;
