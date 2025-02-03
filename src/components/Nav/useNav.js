import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * When the location changes, i.e. when the route changes,
 * the menu is closed, if it's open.
 *
 * @param {function} menuOpenSetter - Calls setMenuOpen state setter.
 */
export default function useNav(menuOpenSetter) {
  const location = useLocation();

  useEffect(() => {
    menuOpenSetter(false);
  }, [location, menuOpenSetter]);
}
