import React, { useState } from 'react';

const rollDice = sides => {
  return Math.floor(Math.random() * sides) + 1;
};

const rollMultipleDice = (diceCount, sides) => {
  let rolls = [];
  for (let i = 0; i < diceCount; i++) {
    rolls.push(rollDice(sides));
  }
  return rolls;
};

const Dice = () => {
  const [diceResults, setDiceResults] = useState({});
  const [diceCounts, setDiceCounts] = useState({
    d20: 1,
    d12: 1,
    d10: 1,
    d8: 1,
    d6: 1,
    d4: 1,
  });

  const handleRollDice = sides => {
    const rolls = rollMultipleDice(diceCounts[`d${sides}`], sides);
    setDiceResults({ ...diceResults, [sides]: rolls });
  };

  const handleChangeDiceCount = (event, sides) => {
    const value = parseInt(event.target.value);
    setDiceCounts({ ...diceCounts, [`d${sides}`]: value });
  };

  return (
    <div>
      <h2>Dice Roller</h2>
      <div>
        <label htmlFor='d20'>Number of d20: </label>
        <input
          type='number'
          id='d20'
          min='1'
          value={diceCounts.d20}
          onChange={e => handleChangeDiceCount(e, 20)}
        />
      </div>
      <div>
        <label htmlFor='d12'>Number of d12: </label>
        <input
          type='number'
          id='d12'
          min='1'
          value={diceCounts.d12}
          onChange={e => handleChangeDiceCount(e, 12)}
        />
      </div>
      <div>
        <label htmlFor='d10'>Number of d10: </label>
        <input
          type='number'
          id='d10'
          min='1'
          value={diceCounts.d10}
          onChange={e => handleChangeDiceCount(e, 10)}
        />
      </div>
      <div>
        <label htmlFor='d8'>Number of d8: </label>
        <input
          type='number'
          id='d8'
          min='1'
          value={diceCounts.d8}
          onChange={e => handleChangeDiceCount(e, 8)}
        />
      </div>
      <div>
        <label htmlFor='d6'>Number of d6: </label>
        <input
          type='number'
          id='d6'
          min='1'
          value={diceCounts.d6}
          onChange={e => handleChangeDiceCount(e, 6)}
        />
      </div>
      <div>
        <label htmlFor='d4'>Number of d4: </label>
        <input
          type='number'
          id='d4'
          min='1'
          value={diceCounts.d4}
          onChange={e => handleChangeDiceCount(e, 4)}
        />
      </div>
      <button onClick={() => handleRollDice(20)}>Roll d20</button>
      <button onClick={() => handleRollDice(12)}>Roll d12</button>
      <button onClick={() => handleRollDice(10)}>Roll d10</button>
      <button onClick={() => handleRollDice(8)}>Roll d8</button>
      <button onClick={() => handleRollDice(6)}>Roll d6</button>
      <button onClick={() => handleRollDice(4)}>Roll d4</button>
      <div>
        {Object.keys(diceResults).map(sides => (
          <p key={sides}>
            Results for {diceCounts[`d${sides}`]} d{sides}:{' '}
            {diceResults[sides].join(', ')}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dice;
