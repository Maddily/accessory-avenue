export default function useProductQuantity(
  id,
  productsInCart,
  updateProductsInCart
) {
  const deleteProduct = function () {
    updateProductsInCart(
      productsInCart.filter((productInCart) => productInCart.id !== id)
    );
  };

  return { deleteProduct };
}
