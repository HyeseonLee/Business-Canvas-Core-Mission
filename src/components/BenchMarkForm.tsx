import { useState } from "react";
import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./styled/LabeledInput";
import SaveButton from "./styled/SaveButton";

import { BenchMarkDefaultInfo } from "../types/benchmark";

const BenchMarkForm: React.FC = () => {
  const [defaultInfo, setDefaultInfo] = useState<BenchMarkDefaultInfo>({
    title: "",
    description: "",
  });

  function handleChangeDefaultInfoTitle(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    e.stopPropagation();
    console.log("🪄 벤치마크 제목을 변경합니다.");
    setDefaultInfo({
      ...defaultInfo,
      title: e.target.value,
    });
  }

  function handleChangeDefaultInfoDescribe(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDefaultInfo({
      ...defaultInfo,
      description: e.target.value,
    });
  }

  function saveBenchMarkToLocalStorage(): void {
    console.log("🪄 로컬 스토리지에 벤치마크 default Info를 저장합니다.");
    localStorage.setItem("benchMark", JSON.stringify(defaultInfo));
  }

  return (
    <>
      <div>
        <LargeText>Benchmark</LargeText>
        <LabeledInput
          label="제목"
          value={defaultInfo.title}
          onChange={handleChangeDefaultInfoTitle}
        />

        <LabeledInput
          label="용어 설명"
          value={defaultInfo.description}
          onChange={handleChangeDefaultInfoDescribe}
        />
      </div>

      <hr />
      <BenchMarkSource />

      <SaveButton onClick={saveBenchMarkToLocalStorage} />
    </>
  );
};

export default BenchMarkForm;
