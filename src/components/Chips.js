import React from 'react';
import PropTypes from 'prop-types';

function Chips({ chips, addChips }) {
  const chipElements = chips.map(chip => {
    return (
      // eslint-disable-next-line react/jsx-key
      <li>
        <p>{chip}</p>
      </li>
    );
  });

  return (
    <>
      <button onClick={addChips}>Add Chips</button>
      <ul>{chipElements}</ul>
    </>
  );
}
Chips.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string).isRequired,
  addChips: PropTypes.func.isRequired,
};

export default Chips;

