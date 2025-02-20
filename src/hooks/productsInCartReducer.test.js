import { vi, it, describe, expect, beforeEach } from 'vitest';
import productsInCartReducer from './productsInCartReducer';

describe('productsInCartReducer', () => {
  let productInCart;

  const localStorageMock = {
    setItem: vi.fn(),
  };

  globalThis.localStorage = localStorageMock;

  beforeEach(() => {
    productInCart = [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 3 },
    ];
  });

  it('stores products in local storage in the case of update_products_in_cart action', () => {
    productsInCartReducer(productInCart, {
      type: 'update_products_in_cart',
      products: [
        { id: 1, quantity: 1 },
        { id: 3, quantity: 1 },
      ],
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'productsInCart',
      JSON.stringify([
        { id: 1, quantity: 1 },
        { id: 3, quantity: 1 },
      ])
    );
  });

  it('returns the given products in the case of update_products_in_cart action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'update_products_in_cart',
      products: [
        { id: 1, quantity: 1 },
        { id: 3, quantity: 1 },
      ],
    });

    expect(products).toEqual([
      { id: 1, quantity: 1 },
      { id: 3, quantity: 1 },
    ]);
  });

  it('returns the updated products after updating the quantity of a product in the case of update_product_quantity action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'update_product_quantity',
      productId: 1,
      quantity: 2,
    });

    expect(products).toEqual([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 3 },
    ]);
  });

  it('returns the updated products after incrementing the quantity of a product in the case of increment_product_quantity action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'increment_product_quantity',
      productId: 2,
    });

    expect(products).toEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
      { id: 3, quantity: 3 },
    ]);
  });

  it('returns the updated products after decrementing the quantity of a product in the case of decrement_product_quantity action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'decrement_product_quantity',
      productId: 3,
    });

    expect(products).toEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 2 },
    ]);
  });

  it('returns the updated products after adding a product in the case of add_to_cart action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'add_to_cart',
      product: { id: 4, quantity: 1 },
    });

    expect(products).toEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 3 },
      { id: 4, quantity: 1 },
    ]);
  });

  it('returns the updated products after removing a product in the case of remove_from_cart action', () => {
    const products = productsInCartReducer(productInCart, {
      type: 'remove_from_cart',
      productId: 3,
    });

    expect(products).toEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
    ]);
  });

  it('throws an error when given an unknown action', () => {
    expect(() =>
      productsInCartReducer(productInCart, { type: 'remove' })
    ).toThrow('Unknown action: remove');
  });
});
