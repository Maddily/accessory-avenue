import { renderHook, act } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { it } from 'vitest';
import useCart from './useCart';
import { describe, expect } from 'vitest';

describe('useCart hook', () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useCart()));
  });

  it('initializes with an empty cart', () => {
    expect(result.current.productsInCart).toEqual([]);
  });

  it('updates the cart when updateProductsInCart is called', () => {
    act(() => {
      result.current.updateProductsInCart([{ id: 1, title: 'product 1' }]);
    });

    expect(result.current.productsInCart).toEqual([
      { id: 1, title: 'product 1' },
    ]);
  });

  it('replaces cart contents when updateProductsInCart is called again', () => {
    act(() => {
      result.current.updateProductsInCart([{ id: 1, title: 'product 1' }]);
    });

    act(() => {
      result.current.updateProductsInCart([{ id: 2, title: 'product 2' }]);
    });

    expect(result.current.productsInCart).toEqual([
      { id: 2, title: 'product 2' },
    ]);
  });
});
