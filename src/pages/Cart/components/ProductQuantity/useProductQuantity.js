import { useContext } from 'react';
import { DispatchCartContext } from '../../../../contexts';

/**
 * Creates a returns a function to delete a product from the cart.
 *
 * @param {number} id - The id of a product.
 * @param {function} dispatchCartAction - Dispatches an action to update the cart.
 * @returns A function to delete a product from the cart.
 */
export default function useProductQuantity(id) {
  const dispatchCartAction = useContext(DispatchCartContext);

  const deleteProduct = function () {
    dispatchCartAction({
      type: 'remove_from_cart',
      productId: id,
    });
  };

  return { deleteProduct };
}
