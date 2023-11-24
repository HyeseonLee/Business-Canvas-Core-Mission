import { useDefaultInfoContext } from "../context/DefaultInfoContext";
import { usePreviewContext } from "../context/PreviewContext";
import { useSourceContext } from "../context/SourceContext";

export function useLocalStorage() {
  const { defaultInfo } = useDefaultInfoContext();
  const { previewData, setPreviewData } = usePreviewContext();
  const sources = useSourceContext();

  function saveBenchMarkToLocalStorage(): void {
    console.log("🪄 로컬 스토리지에 벤치마크 default Info를 저장합니다.");
    const combinedBenchMarkInfo = { ...defaultInfo, source: sources };
    localStorage.setItem("benchMark", JSON.stringify(combinedBenchMarkInfo));
    updateBenchMarkPreview();
  }

  function updateBenchMarkPreview() {
    console.log("🪄 벤치마크 프리뷰를 업데이트합니다.");
    const benchMarkInfo = localStorage.getItem("benchMark");
    if (benchMarkInfo == null) return {};
    else {
      setPreviewData(JSON.parse(benchMarkInfo));
      console.log("previewDAta", previewData);
    }
  }

  return {
    saveBenchMarkToLocalStorage,
    updateBenchMarkPreview,
  };
}
