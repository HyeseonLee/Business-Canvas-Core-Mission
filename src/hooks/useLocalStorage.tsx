import { useSourceContext } from "../context/SourceContext";
import localforage from "localforage";
import { BenchMarkInfo } from "../types/benchmark";
import { DefaultInfo } from "../types/benchmark";
export type UseLocalStorage = {
  defaultInfo: DefaultInfo;
  setPreviewData: React.Dispatch<React.SetStateAction<BenchMarkInfo>>;
};
export function useLocalStorage({
  defaultInfo,
  setPreviewData,
}: UseLocalStorage) {
  const { sources } = useSourceContext();

  function isValidUrl(url: string) {
    if (url && url.trim() !== "") {
      try {
        new URL(url);
      } catch (_) {
        return false;
      }
    }
    return true;
  }
  async function saveBenchMarkToLocalStorage() {
    const combinedBenchMarkInfo = { ...defaultInfo, sources: sources };

    const isValidSourceUrl: boolean = sources.every((source) =>
      isValidUrl(source.url)
    );

    if (isValidSourceUrl) {
      await localforage
        .setItem("benchMark", combinedBenchMarkInfo)
        .then(async () => await updateBenchMarkPreview());
    } else {
      alert("유효하지 않은 URL 형식이 존재합니다. 확인해주세요.");
    }
  }

  async function updateBenchMarkPreview() {
    const benchMarkInfo = await localforage.getItem("benchMark");
    if (benchMarkInfo == null) {
      setPreviewData({
        title: "",
        description: "",
        sources: [],
      });
    } else {
      setPreviewData(benchMarkInfo as BenchMarkInfo);
    }
  }

  return {
    saveBenchMarkToLocalStorage,
    updateBenchMarkPreview,
  };
}
