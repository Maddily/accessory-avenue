import { useState } from 'react';

/**
 * Manages products in cart.
 *
 * @returns productsInCart state and a function to update it.
 */
export default function useCart() {
  const [productsInCart, setProductsInCart] = useState([]);

  const updateProductsInCart = function (products) {
    setProductsInCart(products);
  };

  return { productsInCart, updateProductsInCart };
}
