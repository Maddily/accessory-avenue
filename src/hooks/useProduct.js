import { useReducer } from 'react';
import quantityReducer from './quantityReducer';

/**
 * Manages the quantity of a product and defines handlers to update
 * the displayed quantity, add a product to the cart and
 * remove a product from the cart.
 *
 * @param {number} id - The id of the product.
 * @param {string} imageUrl - The url of the product image.
 * @param {string} title - The title of the product.
 * @param {number} rating - The rating of the product.
 * @param {number} price - The price of the product.
 * @param {array} productsInCart - The products added to cart.
 * @param {function} updateProductsInCart - Updates the products added to cart.
 *
 * @returns quantity state and updateQuantity.
 */
export default function useProduct({
  id,
  imageUrl,
  title,
  rating,
  price,
  productsInCart,
  updateProductsInCart,
  isFeaturedProduct = false,
  currentQuantity = 0,
}) {
  const [quantity, dispatch] = useReducer(quantityReducer, currentQuantity);
  let updatedProduct = { id, imageUrl, title, rating, price, quantity };

  /**
   * Updates the displayed product quantity when a user changes
   * it before adding the product to the cart.
   */
  function updateQuantity(e) {
    // If the quantity is entered in the input field.
    if (e.type === 'change') {
      const value = +e.target.value;

      dispatch({
        type: 'change_quantity',
        value: e.target.value,
      });

      // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
      if (currentQuantity > 0) {
        if (value > 0) {
          callUpdateProductsInCart(value);
        } else {
          removeFromCart(id);
        }
      }

      return;
    }

    // If the increase/decrease buttons are clicked.
    const step = e.target.closest('button')?.dataset.step;

    if (step === 'down') {
      // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
      if (currentQuantity > 0) {
        if (quantity > 1) {
          callUpdateProductsInCart(quantity - 1);
        } else {
          removeFromCart(id);
        }
      }

      dispatch({
        type: 'decrement_quantity',
      });
    }

    if (step === 'up') {
      // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
      if (currentQuantity > 0) {
        callUpdateProductsInCart(quantity + 1);
      }

      dispatch({
        type: 'increment_quantity',
      });
    }
  }

  /**
   * A helper for the cart page that calls
   * updateProductsInCart function, which, in turn,
   * calls setProductsInCart to update productsInCart state.
   *
   * @param {number} newQuantity - The product's quantity after updating
   */
  function callUpdateProductsInCart(newQuantity) {
    updateProductsInCart(
      productsInCart.map((productInCart) => {
        if (productInCart.id === id) {
          return { ...updatedProduct, quantity: newQuantity };
        }
        return productInCart;
      })
    );
  }

  // Adds a product to the cart.
  function addToCartHandler() {
    if (quantity === 0 && !isFeaturedProduct) {
      return;
    }

    // The quantity is added to `updatedProduct` and the state can be safely reset after adding a product to the cart.
    dispatch({
      type: 'remove_quantity',
    });

    // If this is a featured product rendered in the home page, where the quantity can't be specified with an input field, make the quantity 1.
    if (isFeaturedProduct) {
      updatedProduct.quantity = 1;
    }

    const existingProduct = productsInCart.find(
      (productInCart) => productInCart.id === id
    );

    // If product is in the cart, update its quantity
    if (existingProduct) {
      const existingProductQuantity = existingProduct.quantity;

      updatedProduct.quantity += existingProductQuantity;

      updateProductsInCart(
        productsInCart.map((productInCart) => {
          if (productInCart.id === id) {
            return updatedProduct;
          }
          return productInCart;
        })
      );

      return;
    }

    // The product isn't in the cart, add it.
    updateProductsInCart([...productsInCart, updatedProduct]);
  }

  // Removes a product from the cart.
  function removeFromCart(id) {
    const updatedProducts = productsInCart.filter(
      (productInCart) => productInCart.id !== id
    );

    updateProductsInCart(updatedProducts);
  }

  const quantityInCart =
    productsInCart.find((productInCart) => productInCart.id === id)?.quantity ||
    0;

  return {
    quantity,
    updateQuantity,
    addToCartHandler,
    removeFromCart,
    quantityInCart,
  };
}
