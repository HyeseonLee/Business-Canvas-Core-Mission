import { useReducer, useState, useContext } from "react";
import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./styled/LabeledInput";
import SaveButton from "./styled/SaveButton";
import { Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { BenchMarkDefaultInfo, Source } from "../types/benchmark";
import sourceReducer from "../reducers/sourceReducer";
import { SourceContext, SourceDispatchContext } from "../context/SourceContext";

const BenchMarkForm: React.FC = () => {
  console.log("🪄 BenchMarkForm 컴포넌트가 렌더링됩니다.");

  const [defaultInfo, setDefaultInfo] = useState<BenchMarkDefaultInfo>({
    title: "",
    description: "",
  });

  const [test, setTest] = useState("");
  let num = 0;

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

  const dispatch = useContext(SourceDispatchContext);

  function handleAddSource() {
    console.log("🪄 새로운 벤치마크 출처를 추가합니다.");
    dispatch({
      type: "ADD_SOURCE",
    });
  }

  function handleDeleteSource(id: string) {
    console.log("🧹 벤치마크 출처를 삭제합니다.");
    dispatch({
      type: "DELETE_SOURCE",
      id,
    });
  }

  function handleChangeSource(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    key: string,
    value: string
  ) {
    dispatch({
      type: "CHANGE_SOURCE",
      id,
      key,
      value,
    });
  }

  function handleAddData(sourceId: string): void {
    console.log(`🪄 데이터를 추가합니다. sourceId${sourceId}`);
    dispatch({
      type: "ADD_DATA",
      sourceId,
    });
  }

  function handleDeleteData(sourceId: string, dataId: string): void {
    console.log(
      `🧹 데이터를 삭제합니다. sourceId : ${sourceId} dataId: ${dataId}`
    );
    dispatch({
      type: "DELETE_DATA",
      sourceId,
      dataId,
    });
  }
  function handleChangeDataContent(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    sourceId: string,
    dataId: string
  ): void {
    console.log("🪄 데이터 내용을 변경합니다.");
    dispatch({
      type: "CHANGE_DATA",
      sourceId,
      dataId,
      content: e.target.value,
    });
  }

  return (
    <>
      <div>
        <LargeText>Benchmark</LargeText>
        <Input
          value={test}
          onChange={(e) => {
            setTest(e.target.value);
            num++;
            console.log("테스트", num);
          }}
        />
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
