import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./inputs/LabeledInput";
import SaveButton from "./buttons/SaveButton";

import { useDefaultInfoContext } from "../context/DefaultInfoContext";
import { OuterContainer } from "./styled/Container";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BenchMarkForm: React.FC = () => {
  const { defaultInfo, setDefaultInfo } = useDefaultInfoContext();
  const { saveBenchMarkToLocalStorage } = useLocalStorage();

  function handleChangeDefaultInfo(e: React.ChangeEvent<HTMLInputElement>) {
    setDefaultInfo({
      ...defaultInfo,
      [e.target.name]: e.target.value,
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
          onChange={handleChangeDefaultInfo}
        />

        <LabeledInput
          label="용어 설명"
          name="description"
          value={defaultInfo.description}
          onChange={handleChangeDefaultInfo}
        />
      </div>

      <BenchMarkSource />

      <SaveButton onClick={saveBenchMarkToLocalStorage} />
    </OuterContainer>
  );
};

export default BenchMarkForm;
