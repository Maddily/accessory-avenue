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
      updateStoredProducts(action.products);
      return action.products;
    }
    case 'update_product_quantity': {
      const updatedProducts = productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: action.quantity };
        }
        return productInCart;
      });

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    case 'increment_product_quantity': {
      const updatedProducts = productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: productInCart.quantity + 1 };
        }
        return productInCart;
      });

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    case 'decrement_product_quantity': {
      const updatedProducts = productsInCart.map((productInCart) => {
        if (productInCart.id === action.productId) {
          return { ...productInCart, quantity: productInCart.quantity - 1 };
        }
        return productInCart;
      });

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    case 'add_to_cart': {
      const updatedProducts = [...productsInCart, action.product];

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    case 'remove_from_cart': {
      const updatedProducts = productsInCart.filter((productInCart) => {
        if (productInCart.id !== action.productId) {
          return productInCart;
        }
      });

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function updateStoredProducts(products) {
  localStorage.setItem('productsInCart', JSON.stringify(products));
}
