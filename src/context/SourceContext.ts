import { createContext } from "react";
import { Source } from "../types/benchmark";
import { SourcesAction } from "../reducers/sourceReducer";
import { Dispatch } from "react";

export const SourceContext = createContext<Source[] | null>(null);
export const SourceDispatchContext =
  createContext<Dispatch<SourcesAction> | null>(null);
