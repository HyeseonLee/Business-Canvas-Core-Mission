import { useSourceContext } from "../context/SourceContext";
import localforage from "localforage";
import { BenchMarkInfo } from "../types/benchmark";
import { DefaultInfo } from "../types/benchmark";
import { useCallback, useEffect, useRef } from "react";

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

  const saveBenchMarkToLocalStorage = useCallback(async () => {
    console.log("saveBenchMarkToLocalStorage 함수 생겼다");
    const combinedBenchMarkInfo = {
      ...defaultInfo,
      sources: sources,
    };

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
  }, [defaultInfo, sources]);

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
  };
}
