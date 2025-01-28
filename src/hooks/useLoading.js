import { useState, useEffect } from 'react';

/**
 * A custom hook for managing loading state.
 *
 * @returns loading state.
 */
export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return { loading };
}
