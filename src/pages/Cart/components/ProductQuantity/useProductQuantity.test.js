import { act, renderHook } from '@testing-library/react';
import { it, vi, describe, expect } from 'vitest';
import useProductQuantity from './useProductQuantity';

const dispatchCartActionMock = vi.fn();

vi.mock('react', async (importOriginal) => {
  const actualReact = await importOriginal();
  return {
    ...actualReact,
    useContext: () => dispatchCartActionMock,
  };
});

describe('useProductQuantity', () => {
  let result;

  it('returns a function that calls dispatchCartAction with remove_from_cart action type and product id', () => {
    const productId = 1;

    ({ result } = renderHook(() => useProductQuantity(productId)));

    const deleteProduct = result.current.deleteProduct;
    act(() => deleteProduct());

    expect(dispatchCartActionMock).toHaveBeenCalledWith({
      type: 'remove_from_cart',
      productId,
    });
  });
}); 
