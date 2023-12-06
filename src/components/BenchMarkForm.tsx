import { LargeText } from "./styled/Text";
import BenchMarkSource from "./BenchMarkSource";
import LabeledInput from "./inputs/LabeledInput";
import SaveButton from "./buttons/SaveButton";
import { OuterContainer } from "./styled/Container";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCallback, useEffect, useState } from "react";
import { readDefaultInfoFromLocalStorage } from "../utils/readLocalStorage";
import { DefaultInfo, BenchMarkInfo } from "../types/benchmark";

type BenchMarkFormProps = {
  setPreviewData: React.Dispatch<React.SetStateAction<BenchMarkInfo>>;
};
const BenchMarkForm: React.FC<BenchMarkFormProps> = ({ setPreviewData }) => {
  const [defaultInfo, setDefaultInfo] = useState<DefaultInfo>({
    title: "",
    description: "",
  });

  const { saveBenchMarkToLocalStorage } = useLocalStorage({
    defaultInfo,
    setPreviewData,
  });

  const handleChangeDefaultInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefaultInfo((prevDefaultInfo) => ({
        ...prevDefaultInfo,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  useEffect(() => {
    const fetchDefaultInfo = async () => {
      const response = await readDefaultInfoFromLocalStorage();
      setDefaultInfo(response);
    };

    fetchDefaultInfo();
  }, []);

  console.log("Form rendered");
  return (
    <OuterContainer flexbasis="55%">
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
