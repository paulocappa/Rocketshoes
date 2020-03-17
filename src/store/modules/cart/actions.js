export const addRequest = id => ({
  type: '@cart/REQUEST',
  id,
});

export const addToCart = product => ({
  type: '@cart/ADD',
  product,
});

export const removeFromCart = id => ({
  type: '@cart/REMOVE',
  id,
});

export const updateAmountRequest = (id, amount) => ({
  type: '@cart/UPDATE_AMOUNT_REQUEST',
  id,
  amount,
});

export const updateAmount = (id, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  id,
  amount,
});
