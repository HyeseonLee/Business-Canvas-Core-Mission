import { createContext, useContext } from "react";
import { Source } from "../types/benchmark";
import { SourcesAction } from "../reducers/sourceReducer";
import { Dispatch } from "react";

export const SourceContext = createContext<Source[] | null>(null);
export const SourceDispatchContext =
  createContext<Dispatch<SourcesAction> | null>(null);

export function useSourceContext() {
  const sourcContext = useContext(SourceContext);
  if (!sourcContext) throw new Error("SourceContext가 존재하지 않습니다.");
  return sourcContext;
}

export function useSourceDispatchContext() {
  const sourceDispatchContext = useContext(SourceDispatchContext);
  if (!sourceDispatchContext)
    throw new Error("SourceDispatchContext가 존재하지 않습니다.");
  return sourceDispatchContext;
}
