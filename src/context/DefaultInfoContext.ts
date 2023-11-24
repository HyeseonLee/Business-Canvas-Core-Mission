import { createContext, useContext } from "react";
import { DefaultInfoContextType } from "../types/benchmark";

export const DefaultInfoContext = createContext<DefaultInfoContextType | null>(
  null
);

export function useDefaultInfoContext(): DefaultInfoContextType {
  const defaultInfoContext = useContext(DefaultInfoContext);
  if (!defaultInfoContext)
    throw new Error("DefaultInfoContext가 존재하지 않습니다.");
  return defaultInfoContext;
}
