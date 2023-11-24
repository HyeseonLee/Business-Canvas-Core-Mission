import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./LabeledInput";
import SaveButton from "./styled/SaveButton";

import { useDefaultInfoContext } from "../context/DefaultInfoContext";
import { OuterContainer } from "./styled/Container";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BenchMarkForm: React.FC = () => {
  const { defaultInfo, setDefaultInfo } = useDefaultInfoContext();
  const { saveBenchMarkToLocalStorage } = useLocalStorage();

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
