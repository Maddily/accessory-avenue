import { useState, useEffect } from 'react';

/**
 * Manages products in cart.
 *
 * @returns productsInCart state and a function to update it.
 */
export default function useCart() {
  const [productsInCart, setProductsInCart] = useState([]);

  // On component mount, retrieve data from local storage
  useEffect(() => {
    const storedProductsInCart = localStorage.getItem('productsInCart');

    storedProductsInCart && setProductsInCart(JSON.parse(storedProductsInCart));
  }, []);

  const updateProductsInCart = function (products) {
    setProductsInCart(products);
    localStorage.setItem('productsInCart', JSON.stringify(products));
  };

  return { productsInCart, updateProductsInCart };
}
