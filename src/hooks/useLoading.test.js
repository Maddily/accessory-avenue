import { renderHook, act } from '@testing-library/react';
import { beforeEach, afterEach } from 'vitest';
import { it } from 'vitest';
import { vi, describe, expect } from 'vitest';
import useLoading from './useLoading';

describe('useLoading hook', () => {
  let result;

  beforeEach(() => {
    vi.useFakeTimers();

    ({ result } = renderHook(() => useLoading()));
  });

  afterEach(() => vi.useRealTimers());

  it('returns loading state as true, initially', () => {
    expect(result.current.loading).toBe(true);
  });

  it('returns loading state as false after one second', () => {
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.loading).toBe(false);
  });

  it('should clear timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    const { unmount } = renderHook(() => useLoading());

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
  });
});
