import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./styled/LabeledInput";
import SaveButton from "./styled/SaveButton";

export default function BenchMarkForm() {
  return (
    <>
      <div>
        <LargeText>Benchmark</LargeText>

        <LabeledInput
          label="제목:"
          value="value"
          onChange={() => alert("onchange")}
        />

        <LabeledInput label="용어 설명:" value="용" onChange={() => 1} />
      </div>

      <hr />
      <BenchMarkSource />

      <SaveButton onClick={() => alert("저장")} />
    </>
  );
}

const benchMarkStatus = {
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
