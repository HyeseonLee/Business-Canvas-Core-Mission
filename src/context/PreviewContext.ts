import { useContext, createContext } from "react";
import { PreviewContextType } from "../types/benchmark";

export const PreviewContext = createContext<PreviewContextType | null>(null);

export function usePreviewContext(): PreviewContextType {
  const previewContext = useContext(PreviewContext);
  if (!previewContext) throw new Error("PreviewContext가 존재하지 않습니다.");
  return previewContext;
}
