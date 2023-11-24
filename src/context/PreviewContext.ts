import { useContext, createContext } from "react";
import { BenchMarkInfo } from "../types/benchmark";

type PreviewContextType = {
  previewData: BenchMarkInfo;
  setPreviewData: React.Dispatch<React.SetStateAction<BenchMarkInfo>>;
};
export const PreviewContext = createContext<PreviewContextType | null>(null);

export function usePreviewContext() {
  const previewContext = useContext(PreviewContext);
  if (!previewContext) throw new Error("PreviewContext가 존재하지 않습니다.");
  return previewContext;
}
