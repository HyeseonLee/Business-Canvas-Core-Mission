import { createContext, useContext } from "react";
import { DefaultInfo } from "../types/benchmark";

interface DefaultInfoContextType {
  defaultInfo: DefaultInfo;
  setDefaultInfo: React.Dispatch<React.SetStateAction<DefaultInfo>>;
}

export const DefaultInfoContext = createContext<DefaultInfoContextType | null>(
  null
);

export function useDefaultInfoContext() {
  const defaultInfoContext = useContext(DefaultInfoContext);
  if (!defaultInfoContext)
    throw new Error("DefaultInfoContext가 존재하지 않습니다.");
  return defaultInfoContext;
}
