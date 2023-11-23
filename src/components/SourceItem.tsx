import { Source } from "../types/source";
import DeleteButton from "./styled/DeleteButton";
import LabeledInput from "./styled/LabeledInput";
import BenchMarkData from "./BenchMarkData";

type SourceItemProps = {
  source: Source;
  handleChangeSourceTitle: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleChangeSourceURL: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDeleteSource: (id: string) => void;
};
const SourceItem: React.FC<SourceItemProps> = ({
  source,
  handleChangeSourceTitle,
  handleChangeSourceURL,
  handleDeleteSource,
}) => {
  return (
    <div
      key={source.id}
      style={{
        padding: "10px",
        border: "1px solid #f0f0f0",
        borderRadius: "0 0 8px 8px",
        position: "relative",
      }}
    >
      <DeleteButton targetStateId={source.id} onClick={handleDeleteSource} />

      <LabeledInput
        targetStateId={source.id}
        label="제목:"
        value={source.title}
        onChangeWithId={handleChangeSourceTitle}
        inputSize="60%"
      />
      <LabeledInput
        targetStateId={source.id}
        label="URL:"
        value={source.url}
        onChangeWithId={handleChangeSourceURL}
        inputSize="60%"
      />
      {/* 벤치마크 데이터 */}
      <BenchMarkData />
    </div>
  );
};

export default SourceItem;
