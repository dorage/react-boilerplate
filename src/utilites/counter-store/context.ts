import { createContext, useState } from "react";
import { CounterStore } from "./type";

export const context = createContext<CounterStore>({} as never);
