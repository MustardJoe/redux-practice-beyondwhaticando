export const getDrinks = state => state.box.drinks;

export const getChips = state => state.box.chips;
export const getTotalChips = state => getChips(state).lenght;
