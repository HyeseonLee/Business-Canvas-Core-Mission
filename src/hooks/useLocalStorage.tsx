import { useDefaultInfoContext } from "../context/DefaultInfoContext";
import { usePreviewContext } from "../context/PreviewContext";
import { useSourceContext } from "../context/SourceContext";
import localforage from "localforage";
import { BenchMarkInfo } from "../types/benchmark";

export function useLocalStorage() {
  const { defaultInfo } = useDefaultInfoContext();
  const { setPreviewData } = usePreviewContext();
  const sources = useSourceContext();

  async function saveBenchMarkToLocalStorage() {
    console.log("🪄 로컬 스토리지에 벤치마크 default Info를 저장합니다.");
    const combinedBenchMarkInfo = { ...defaultInfo, sources: sources };
    await localforage
      .setItem("benchMark", combinedBenchMarkInfo)
      .then(async () => await updateBenchMarkPreview());
  }

  async function updateBenchMarkPreview() {
    console.log("🪄 벤치마크 프리뷰를 업데이트합니다.");
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
