import { useState } from "react";
import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./styled/LabeledInput";
import SaveButton from "./styled/SaveButton";

import { useSourceContext } from "../context/SourceContext";
import { useDefaultInfoContext } from "../context/DefaultInfoContext";
import { OuterContainer } from "./styled/Container";

const BenchMarkForm: React.FC = () => {
  const source = useSourceContext();
  const { defaultInfo, setDefaultInfo } = useDefaultInfoContext();

  function handleChangeDefaultInfoTitle(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
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
    const combinedBenchMarkInfo = { ...defaultInfo, source };
    localStorage.setItem("benchMark", JSON.stringify(combinedBenchMarkInfo));
  }

  return (
    <OuterContainer flexBasis="55%">
      <LargeText>Benchmark</LargeText>
      <div
        style={{
          margin: "10px 0px",
        }}
      >
        <LabeledInput
          label="제목"
          name="title"
          value={defaultInfo.title}
          onChange={handleChangeDefaultInfoTitle}
        />

        <LabeledInput
          label="용어 설명"
          name="description"
          value={defaultInfo.description}
          onChange={handleChangeDefaultInfoDescribe}
        />
      </div>

      <BenchMarkSource />

      <SaveButton onClick={saveBenchMarkToLocalStorage} />
    </OuterContainer>
  );
};

export default BenchMarkForm;
