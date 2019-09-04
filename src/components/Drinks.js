/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

function Drinks({ drinks, addWater }) {
  const drinkElements = drinks.map(drink => {
    return (
      <li>
        <p>{drink}</p>
      </li>
    );
  });

  return (
    <>
      <button onClick={addWater}>Add Watter</button>
      <ul>{drinkElements}</ul>
    </>
  );
}

Drinks.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  addWater: PropTypes.func.isRequired,
};

export default Drinks;
