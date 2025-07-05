import { StoreApi, UseBoundStore } from "zustand";

export type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export type CounterStore = StoreApi<CounterState>;
