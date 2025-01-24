import { useState } from 'react';

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
}) {
  const [quantity, setQuantity] = useState(0);
  let updatedProduct = { id, imageUrl, title, rating, price, quantity };

  /**
   * Updates the displayed product quantity when a user changes
   * it before adding the product to the cart.
   */
  function updateQuantity(e) {
    // If the quantity is entered in the input field.
    if (e.type === 'change') {
      const value = +e.target.value;

      if (value >= 0) {
        setQuantity(value);
      } else {
        setQuantity(0);
      }

      return;
    }

    // If the increase/decrease buttons are clicked.
    const step = e.target.closest('button')?.dataset.step;

    step === 'down' && quantity > 0 && setQuantity((quantity) => quantity - 1);

    step === 'up' && setQuantity((quantity) => quantity + 1);
  }

  // Adds a product to the cart.
  function addToCartHandler() {
    if (quantity === 0) return;

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
      setQuantity(0);
      return;
    }

    // The product isn't in the cart, add it.
    updateProductsInCart([...productsInCart, updatedProduct]);

    setQuantity(0);
  }

  // Removes a product from the cart.
  function removeFromCart(id) {
    const updatedProducts = productsInCart.filter(
      (productInCart) => productInCart.id !== id
    );

    updateProductsInCart(updatedProducts);
  }

  const quantityInCart = productsInCart.find(
    (productInCart) => productInCart.id === id
  )?.quantity || 0;

  return {
    quantity,
    updateQuantity,
    addToCartHandler,
    removeFromCart,
    quantityInCart,
  };
}
