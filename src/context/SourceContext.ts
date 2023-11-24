import { createContext, useContext } from "react";
import { SourceContextType } from "../types/benchmark";

export const SourceContext = createContext<SourceContextType | null>(null);

export function useSourceContext(): SourceContextType {
  const sourceContext = useContext(SourceContext);
  if (!sourceContext) throw new Error("SourceContext가 존재하지 않습니다.");
  return sourceContext;
}
