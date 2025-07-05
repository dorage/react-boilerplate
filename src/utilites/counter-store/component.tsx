import { useState } from "react";
import { createStore } from "zustand";
import { context } from "./context";
import { CounterStore } from "./type";

export interface CounterStoreProviderProps {
  defaultCount?: number;
}

export const CounterStoreProvider = (
  props: React.PropsWithChildren<CounterStoreProviderProps>,
) => {
  const [value] = useState<CounterStore>(
    createStore((set) => ({
      count: props.defaultCount ?? 0,
      increase: () => set((state) => ({ ...state, count: state.count + 1 })),
      decrease: () => set((state) => ({ ...state, count: state.count - 1 })),
    })),
  );

  return <context.Provider value={value}>{props.children}</context.Provider>;
};
