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
      const updatedProducts = getUpdatedProducts(
        productsInCart,
        action,
        action.product.quantity
      );

      updateStoredProducts(updatedProducts);

      return updatedProducts;
    }
    case 'add_featured_product_to_cart': {
      const updatedProducts = getUpdatedProducts(productsInCart, action, 1);

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

/**
 * Stores cart products in local storage.
 *
 * @param {array} products - The products added to the cart.
 */
function updateStoredProducts(products) {
  localStorage.setItem('productsInCart', JSON.stringify(products));
}

/**
 * Returns an array of updated products after adding a product or increasing
 * the quantity of one.
 *
 * @param {array} productsInCart - The products added to the cart.
 * @param {object} action - The action to be taken.
 * @param {number} quantity - The quantity of the product to be added to the cart.
 * @returns The products in the cart, updated by adding a product to the cart or by
 * increasing the quantity of one already in the cart.
 */
function getUpdatedProducts(productsInCart, action, quantity) {
  let updatedProducts;

  const productInCart = productsInCart.find(
    (product) => product.id === action.product.id
  );

  if (productInCart) {
    const updatedQuantity = productInCart.quantity + quantity;

    updatedProducts = productsInCart.map((product) => {
      if (product.id === action.product.id) {
        return { ...product, quantity: updatedQuantity };
      }
      return product;
    });
  } else {
    updatedProducts = [...productsInCart, { ...action.product, quantity }];
  }

  return updatedProducts;
}
