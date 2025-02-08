import { renderHook, act } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { it } from 'vitest';
import useCart from './useCart';
import { vi, describe, expect } from 'vitest';

describe('useCart hook', () => {
  let result;

  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
  };

  globalThis.localStorage = localStorageMock;

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

  it('retrieves products stored in localStorage on mount', () => {
    expect(localStorageMock.getItem).toHaveBeenCalledWith('productsInCart');
  });

  it('updates the stored value in localStorage when updateProductsInCart is called', () => {
    act(() => {
      result.current.updateProductsInCart([{ id: 1, title: 'product 1' }]);
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'productsInCart',
      JSON.stringify([{ id: 1, title: 'product 1' }])
    );
  });
});
