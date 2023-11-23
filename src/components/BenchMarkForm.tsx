import { useState } from "react";
import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./styled/LabeledInput";
import SaveButton from "./styled/SaveButton";

type BenchMarkDefaultInfo = {
  title: string;
  description: string;
};

const BenchMarkForm: React.FC = () => {
  const [defaultInfo, setDefaultInfo] = useState<BenchMarkDefaultInfo>({
    title: "",
    description: "",
  });

  function handleChangeDefaultInfoTitle(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
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

  function saveBenchMarkToLocalStorage() {
    console.log("🪄 로컬 스토리지에 벤치마크 default Info를 저장합니다.");
    localStorage.setItem("benchMark", JSON.stringify(defaultInfo));
  }

  return (
    <>
      <div>
        <LargeText>Benchmark</LargeText>

        <LabeledInput
          label="제목:"
          value={defaultInfo.title}
          onChange={handleChangeDefaultInfoTitle}
        />

        <LabeledInput
          label="용어 설명:"
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

const initialDefaultInfo = {
  title: "제목입니다.",
  describe: "용어 설명입니다.",
};

const benchMarkSource = [
  {
    id: 0,
    source_title: "출처 제목입니다.",
    source_url: "출처 url입니다.",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.0-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.0-1",
      },
    ],
  },
  {
    id: 1,
    source_title: "출처 제목입니다.1",
    source_url: "출처 url입니다.1",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.1-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.1-1",
      },
      {
        id: 2,
        data: "데이터 내용입니다.1-2",
      },
    ],
  },
  {
    id: 2,
    source_title: "출처 제목입니다.2",
    source_url: "출처 url입니다.2",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.2-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.2-1",
      },
      {
        id: 2,
        data: "데이터 내용입니다.2-2",
      },
      {
        id: 3,
        data: "데이터 내용입니다.2-3",
      },
    ],
  },
];
