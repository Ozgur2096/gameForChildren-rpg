import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { armors } from './items/armors';
// Define the classes
const classes = {
  wizard: {
    name: 'Wizard',
    description: 'Master of arcane magic.',
    modifiers: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 2,
      wisdom: 1,
      charisma: 1,
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
      dexterity: 0,
      constitution: 2,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    hitPoints: 10,
    armorClass: 14,
    startingSkills: ['Athletics', 'Intimidation'],
  },
  thief: {
    name: 'Thief',
    description: 'Stealthy rogue skilled in deception.',
    modifiers: {
      strength: 0,
      dexterity: 2,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 2,
    },
    hitPoints: 8,
    armorClass: 12,
    startingSkills: ['Stealth', 'Sleight of Hand'],
  },
  ranger: {
    name: 'Ranger',
    description: 'Skilled hunter and tracker of the wild.',
    modifiers: {
      strength: 1,
      dexterity: 1,
      constitution: 0,
      intelligence: 0,
      wisdom: 2,
      charisma: 0,
    },
    hitPoints: 8,
    armorClass: 13,
    startingSkills: ['Survival', 'Nature'],
  },
};

const CharacterCreation = () => {
  const [selectedClass, setSelectedClass] = useState('wizard');
  const [attributes, setAttributes] = useState(classes.wizard.modifiers);

  const handleClassSelect = className => {
    setSelectedClass(className);
    setAttributes({ ...attributes, ...classes[className].modifiers });
  };
  const handleAttributeChange = (attribute, value) => {
    const updatedAttributes = { ...attributes, [attribute]: value };
    setAttributes(updatedAttributes);
  };

  const getTotalHitPoints = () => {
    return classes[selectedClass].hitPoints + attributes.constitution * 2;
  };

  const getTotalArmorClass = () => {
    return (
      classes[selectedClass].armorClass + attributes.dexterity + armors.none
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
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        {Object.keys(attributes).map(attribute => (
          <div key={attribute}>
            <span>
              {attribute}: {attributes[attribute]}
            </span>
            {/* Add + and - buttons for each attribute */}
            <button
              onClick={() =>
                handleAttributeChange(attribute, attributes[attribute] + 1)
              }
            >
              +
            </button>
            <button
              onClick={() =>
                handleAttributeChange(attribute, attributes[attribute] - 1)
              }
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div>
        <h4>Hit Points: {getTotalHitPoints()}</h4>
        <h4>Armor Class: {getTotalArmorClass()}</h4>
      </div>
    </div>
  );
};

export default CharacterCreation;
