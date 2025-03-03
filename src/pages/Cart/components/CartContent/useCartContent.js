import { useMemo } from 'react';

/**
 * Calcuates and returns the total price of the products added to the cart.
 *
 * @param {Array} productsInCart - The products added to the cart.
 * @returns The total price of the products added to the cart.
 */
export function useCartContent(productsInCart) {
  const total = useMemo(() => {
    return productsInCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ).toFixed(2);
  }, [productsInCart]);

  return total;
}
