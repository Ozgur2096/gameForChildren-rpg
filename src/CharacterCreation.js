import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './CharacterCreation.css';

import React, { useState } from 'react';
import { classes } from './characterClasses';
import { armors } from './items/armors';

const CharacterCreation = () => {
  const [selectedClass, setSelectedClass] = useState('wizard');
  const [attributes, setAttributes] = useState(classes.wizard.modifiers);
  const [attributeStars, setAttributeStars] = useState([1, 2, 3]);

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
    <div className='character-creation-container'>
      <h2>Character Creation</h2>
      <div className='name'>
        <label htmlFor='name'>Character Name</label>
        <input type='text' id='name' name='name' />
      </div>
      <p>Select your class:</p>
      <div className='class-selection'>
        {Object.keys(classes).map(className => (
          <button
            key={className}
            onClick={() => {
              handleClassSelect(className);
              setAttributeStars([1, 2, 3]);
            }}
            disabled={className === selectedClass}
          >
            {classes[className].name}
          </button>
        ))}
      </div>
      <div className='class-details'>
        <h3>{classes[selectedClass].name}</h3>
        <p>{classes[selectedClass].description}</p>
        <p>
          Starting Skills: {classes[selectedClass].startingSkills.join(', ')}
        </p>
      </div>
      <div className='attributes'>
        <h4>Attributes</h4>
        <div className='stars'>
          {attributeStars.map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className='star' />
          ))}
        </div>
        {Object.keys(attributes).map(attribute => (
          <div key={attribute} className='attribute-row'>
            <span>
              <div className='attribute-name'>{attribute.toUpperCase()}</div>
              <div>
                {[...Array(attributes[attribute])].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className='star' />
                ))}
              </div>
            </span>
            {/* Add + and - buttons for each attribute */}
            <div>
              {attributes[attribute] ? (
                <button
                  onClick={() => {
                    handleAttributeChange(attribute, attributes[attribute] - 1);
                    setAttributeStars([...attributeStars, 1]);
                  }}
                >
                  -
                </button>
              ) : null}
              {attributeStars.length > 0 ? (
                <button
                  onClick={() => {
                    handleAttributeChange(attribute, attributes[attribute] + 1);
                    attributeStars.pop();
                  }}
                >
                  +
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 className='hit-points'>Hit Points: {getTotalHitPoints()}</h4>
        <h4 className='armor-class'>Armor Class: {getTotalArmorClass()}</h4>
      </div>
    </div>
  );
};

export default CharacterCreation;
