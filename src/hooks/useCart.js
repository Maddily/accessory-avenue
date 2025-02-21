import { useEffect, useReducer } from 'react';
import productsInCartReducer from './productsInCartReducer';

/**
 * Manages products in cart.
 *
 * @returns productsInCart state and a function to update it.
 */
export default function useCart() {
  const [productsInCart, dispatchCartAction] = useReducer(
    productsInCartReducer,
    []
  );

  // On component mount, retrieve data from local storage
  useEffect(() => {
    const storedProductsInCart = localStorage.getItem('productsInCart');

    storedProductsInCart &&
      dispatchCartAction({
        type: 'update_products_in_cart',
        products: JSON.parse(storedProductsInCart),
      });
  }, []);

  return { productsInCart, dispatchCartAction };
}
