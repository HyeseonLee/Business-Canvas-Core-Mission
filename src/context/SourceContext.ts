import { createContext, useContext } from "react";
import { Source } from "../types/benchmark";
import { SourcesAction } from "../reducers/sourceAction";

type SourceContextType = {
  sources: Source[];
  dispatch: React.Dispatch<SourcesAction>;
};
export const SourceContext = createContext<SourceContextType | null>(null);

export function useSourceContext() {
  const sourceContext = useContext(SourceContext);
  if (!sourceContext) throw new Error("SourceContext가 존재하지 않습니다.");
  return sourceContext;
}
