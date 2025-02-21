import { renderHook } from '@testing-library/react';
import { it, vi, describe, expect, beforeEach } from 'vitest';
import useCart from './useCart';

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

  it('retrieves products stored in localStorage on mount', () => {
    expect(localStorageMock.getItem).toHaveBeenCalledWith('productsInCart');
  });

  it('productsInCart state is updated on mount when stored data is found', () => {
    localStorageMock.getItem = vi.fn(() => JSON.stringify([{ id: 1 }]));
    ({ result } = renderHook(() => useCart()));
    expect(result.current.productsInCart).toEqual([{ id: 1 }]);
  });
});
