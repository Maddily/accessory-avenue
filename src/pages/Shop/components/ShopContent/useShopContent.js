import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

/**
 * A custom hook responsible for managing loading state
 * and retrieving products data from the loader.
 *
 * @returns loading state value and fetched products.
 */
export default function useShopContent() {
  const [loading, setLoading] = useState(true);
  const { products } = useLoaderData();

  // Set loading state to false one second after the component is mounted
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return { loading, products };
}
