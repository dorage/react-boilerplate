import { produce } from "immer";
import { create } from "zustand";

export type CounterState = {
  counter: number;
};

export type CounterAction = {
  increase: () => void;
  decrase: () => void;
  set: (setter: (prev: CounterState) => void) => void;
};

export type CounterStore = CounterAction & CounterState;

export const useCounterStore = create<CounterStore>((set, get) => ({
  counter: 0,
  increase: () =>
    set(
      produce((state) => {
        state.counter += 1;
      }),
    ),
  decrase: () =>
    set(
      produce((state) => {
        state.counter -= 1;
      }),
    ),
  set: (setter) => set(produce(setter)),
}));

useCounterStore.subscribe((store) => {
  console.log("[count]: " + store.counter);
});
