import { renderHook, act } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { it } from 'vitest';
import { vi, describe, expect } from 'vitest';
import useScreenResize from './useScreenResize';

describe('useScreenResize hook', () => {
  let setMenuOpenMock;

  beforeEach(() => {
    setMenuOpenMock = vi.fn();
  });

  it('does not call setMenuOpen if menuOpen is false', () => {
    renderHook(() => useScreenResize(false, setMenuOpenMock));

    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });

    expect(setMenuOpenMock).not.toHaveBeenCalled();
  });

  it('does not call setMenuOpen(false) if screen width is less than 600', () => {
    renderHook(() => useScreenResize(true, setMenuOpenMock));

    act(() => {
      window.innerWidth = 599;
      window.dispatchEvent(new Event('resize'));
    });

    expect(setMenuOpenMock).not.toHaveBeenCalled();
  });

  it('calls setMenuOpen(false) if screen width is greater than or equal to 600 and menuOpen is true', () => {
    renderHook(() => useScreenResize(true, setMenuOpenMock));

    act(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(setMenuOpenMock).toHaveBeenCalledTimes(1);
    expect(setMenuOpenMock).toHaveBeenCalledWith(false);
  });
});
