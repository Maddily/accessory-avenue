import { renderHook, act } from '@testing-library/react';
import { it, vi, describe, expect, beforeEach } from 'vitest';
import useProduct from './useProduct';

describe('useProduct', () => {
  let result;

  const args = {
    id: 1,
    imageUrl: 'url',
    title: 'product title',
    rating: 4,
    price: 99,
  };

  beforeEach(() => {
    ({ result } = renderHook(() => useProduct(args)));
  });

  it('Initializes the displayed quantity of the product as 0', () => {
    expect(result.current.quantity).toEqual(0);
  });

  it('updates the quantity when the input value is changed', () => {
    const updateQuantity = result.current.updateQuantity;

    act(() => updateQuantity({ type: 'change', target: { value: 5 } }));

    expect(result.current.quantity).toEqual(5);
  });

  it('updates the quantity when the decrement button is clicked', () => {
    const updateQuantity = result.current.updateQuantity;

    // First, change the quantity
    act(() => updateQuantity({ type: 'change', target: { value: 3 } }));

    // Then, decrement it
    act(() => {
      updateQuantity({
        target: {
          closest: vi.fn(() => {
            return { dataset: { step: 'down' } };
          }),
        },
      });
    });

    expect(result.current.quantity).toEqual(2);
  });

  it('updates the quantity when the increment button is clicked', () => {
    const updateQuantity = result.current.updateQuantity;

    // First, change the quantity
    act(() => updateQuantity({ type: 'change', target: { value: 3 } }));

    // Then, decrement it
    act(() => {
      updateQuantity({
        target: {
          closest: vi.fn(() => {
            return { dataset: { step: 'up' } };
          }),
        },
      });
    });

    expect(result.current.quantity).toEqual(4);
  });

  it('removes the displayed quantity after adding the product to the cart', () => {
    const updateQuantity = result.current.updateQuantity;
    act(() => updateQuantity({ type: 'change', target: { value: 5 } }));

    const addToCartHandler = result.current.addToCartHandler;
    act(() => addToCartHandler());

    expect(result.current.quantity).toEqual(0);
  });
});
