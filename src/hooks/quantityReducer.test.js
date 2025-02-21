import { it, describe, expect } from 'vitest';
import quantityReducer from './quantityReducer';

describe('quantityReducer', () => {
  it('returns the correct quantity in the case of change_quantity action', () => {
    const quantity = quantityReducer(5, { type: 'change_quantity', value: 2 });
    expect(quantity).toEqual(2);
  });

  it('returns the correct quantity in the case of decrement_quantity action', () => {
    const quantity = quantityReducer(5, { type: 'decrement_quantity' });
    expect(quantity).toEqual(4);
  });

  it('returns the correct quantity in the case of increment_quantity action', () => {
    const quantity = quantityReducer(5, { type: 'increment_quantity' });
    expect(quantity).toEqual(6);
  });

  it('returns 0 in the case of remove_quantity action', () => {
    const quantity = quantityReducer(5, { type: 'remove_quantity' });
    expect(quantity).toEqual(0);
  });

  it('throws an error when given an unknown action', () => {
    expect(() => quantityReducer(5, { type: 'remove' })).toThrow(
      'Unknown action: remove'
    );
  });
});
