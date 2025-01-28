import { useLoaderData } from 'react-router-dom';

/**
 * A custom hook for retrieving products data from the loader.
 *
 * @returns the fetched products.
 */
export default function useShopContent() {
  const { products } = useLoaderData();

  return { products };
}
