import { act, renderHook } from '@testing-library/react';
import { it, vi, describe, expect } from 'vitest';
import useProductQuantity from './useProductQuantity';

describe('useProductQuantity', () => {
  let result;

  it('returns a function that calls dispatchCartAction with remove_from_cart action type and product id', () => {
    const dispatchCartAction = vi.fn();
    const productId = 1;

    ({ result } = renderHook(() =>
      useProductQuantity(productId, dispatchCartAction)
    ));

    const deleteProduct = result.current.deleteProduct;
    act(() => deleteProduct());

    expect(dispatchCartAction).toHaveBeenCalledWith({
      type: 'remove_from_cart',
      productId,
    });
  });
});
