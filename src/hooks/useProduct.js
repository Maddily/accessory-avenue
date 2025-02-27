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
 * @param {function} dispatchCartAction - Updates the products added to cart.
 * @param {boolean} isFeaturedProduct - Indicates whether this product is a featured product in the home page.
 * @param {number} currentQuantity - The current quantity of the product in the cart page.
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
  dispatchCartAction,
  isFeaturedProduct = false,
  currentQuantity = 0,
}) {
  const [quantity, dispatch] = useReducer(quantityReducer, currentQuantity);
  // Updates the displayed product quantity when a user changes it, before adding the product to the cart.
  function updateQuantity(e) {
    // If the quantity is entered in the input field.
    if (e.type === 'change') {
      const value = +e.target.value;

      changeQuantity(value);

      return;
    }

    // If the increase/decrease buttons are clicked, increment/decrement quantity.
    const step = e.target.closest('button')?.dataset.step;

    step === 'down' && decrementQuantity();

    step === 'up' && incrementQuantity();
  }

  // Called when the quantity input is changed.
  function changeQuantity(value) {
    dispatch({
      type: 'change_quantity',
      value,
    });

    // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
    if (currentQuantity > 0) {
      if (value > 0) {
        dispatchCartAction({
          type: 'update_product_quantity',
          quantity: value,
          productId: id,
        });
      } else {
        removeFromCart(id);
      }
    }
  }

  // Called when the "increase quantity" button is clicked.
  function incrementQuantity() {
    // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
    if (currentQuantity > 0) {
      dispatchCartAction({
        type: 'increment_product_quantity',
        productId: id,
      });
    }

    dispatch({
      type: 'increment_quantity',
    });
  }

  // Called when the "decrease quantity" button is clicked.
  function decrementQuantity() {
    // if currentQuantity prop is given, then this is the cart page where productsInCart state is updated upon quantity change.
    if (currentQuantity > 0) {
      if (quantity > 1) {
        dispatchCartAction({
          type: 'decrement_product_quantity',
          productId: id,
        });
      } else {
        removeFromCart(id);
      }
    }

    dispatch({
      type: 'decrement_quantity',
    });
  }

  // Adds a product to the cart.
  function addToCartHandler() {
    const updatedProduct = { id, imageUrl, title, rating, price, quantity };

    // If the quantity is 0, there's nothing to add, provided that this isn't a featured product (home page).
    // Featured products don't have a quantity, unlike products in the shop or cart pages.
    if (quantity === 0 && !isFeaturedProduct) {
      return;
    }

    // The quantity is added to `updatedProduct` and the quantity state can be safely reset after adding the product to the cart.
    dispatch({
      type: 'remove_quantity',
    });

    // If this is a featured product rendered in the home page, where the quantity can't be specified with an input field, make the quantity 1.
    if (isFeaturedProduct) {
      updatedProduct.quantity = 1;
    }

    // If the product is in the cart, update its quantity.
    const existingProduct = productsInCart.find(
      (productInCart) => productInCart.id === id
    );
    if (existingProduct) {
      updateExistingProduct(updatedProduct, existingProduct);
      return;
    }

    // The product isn't in the cart, add it.
    dispatchCartAction({
      type: 'add_to_cart',
      product: updatedProduct,
    });
  }

  // Updates the quantity of a product already in the cart.
  function updateExistingProduct(updatedProduct, existingProduct) {
    const existingProductQuantity = existingProduct.quantity;

    updatedProduct.quantity += existingProductQuantity;

    dispatchCartAction({
      type: 'update_product_quantity',
      productId: id,
      quantity: updatedProduct.quantity,
    });
  }

  // Removes a product from the cart.
  function removeFromCart(id) {
    dispatchCartAction({
      type: 'remove_from_cart',
      productId: id,
    });
  }

  return {
    quantity,
    updateQuantity,
    addToCartHandler,
    removeFromCart,
  };
}
