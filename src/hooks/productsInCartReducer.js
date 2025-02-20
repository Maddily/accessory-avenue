/**
 * Manages the productsInCart state.
 *
 * @param {array} productsInCart - The products added to the cart.
 * @param {object} action - The action to be taken.
 * @returns The new products in cart after the update.
 */
export default function productsInCartReducer(productsInCart, action) {
  switch (action.type) {
    case 'update_products_in_cart': {
      localStorage.setItem('productsInCart', JSON.stringify(action.products));
      return action.products;
    }
    case 'update_product_quantity': {
      return productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: action.quantity };
        }
        return productInCart;
      });
    }
    case 'increment_product_quantity': {
      return productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: productInCart.quantity + 1 };
        }
        return productInCart;
      });
    }
    case 'decrement_product_quantity': {
      return productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: productInCart.quantity - 1 };
        }
        return productInCart;
      });
    }
    case 'add_to_cart': {
      return [...productsInCart, action.product];
    }
    case 'remove_from_cart': {
      return productsInCart.filter((productInCart) => {
        if (productInCart.id !== action.productId) {
          return productInCart;
        }
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
