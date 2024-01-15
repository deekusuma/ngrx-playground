import { computed } from '@angular/core';
import {
  signalStore,
  withComputed,
  withMethods,
  withState,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { interval } from 'rxjs';

export const CounterStore = signalStore(
  withState({ count: 0 }),
  withComputed(({ count }) => ({ doubleCount: computed(() => count() * 2) })),
  withMethods(({ count, ...store }) => ({
    increment() {
      patchState(store, { count: count() + 1 });
    },
    decrement() {
      patchState(store, { count: count() - 1 });
    },
  })),
  withHooks({
    onInit({ increment }) {
      increment();
    },
  })
);
