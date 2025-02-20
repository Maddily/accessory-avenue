/**
 * Manages the quantity state.
 *
 * @param {number} quantity - The current quantity displayed
 * @param {object} action - The action to be taken
 * @returns the new quantity
 */
export default function quantityReducer(quantity, action) {
  switch (action.type) {
    case 'change_quantity': {
      const value = action.value;
      return value >= 0 ? value : 0;
    }
    case 'decrement_quantity': {
      return quantity > 0 ? quantity - 1 : 0;
    }
    case 'increment_quantity': {
      return quantity + 1;
    }
    case 'remove_quantity': {
      return 0;
    }
  }
}
