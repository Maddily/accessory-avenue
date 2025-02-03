/**
 * Calcuates and returns the total price of the products added to the cart.
 *
 * @param {Array} productsInCart - The products added to the cart.
 * @returns The total price of the products added to the cart.
 */
export function useCartContent(productsInCart) {
  const total = productsInCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return total;
}
