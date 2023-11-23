import { Source } from "../types/benchmark";
import DeleteButton from "./styled/DeleteButton";
import LabeledInput from "./styled/LabeledInput";
import BenchMarkData from "./BenchMarkData";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { MediumText } from "./styled/Text";

type SourceItemProps = {
  source: Source;
  setSource: React.Dispatch<React.SetStateAction<Source[]>>;
  handleChangeSourceTitle: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleChangeSourceURL: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDeleteSource: (id: string) => void;
  handleChangeDataContent: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    sourceId: string,
    dataId: string
  ) => void;
  handleAddData: (sourceId: string) => void;
  handleDeleteData: (sourceId: string, dataId: string) => void;
};

const SourceItem: React.FC<SourceItemProps> = ({
  source,
  handleChangeSourceTitle,
  handleChangeSourceURL,
  handleDeleteSource,
  handleChangeDataContent,
  handleAddData,
  handleDeleteData,
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
      <DeleteButton
        targetSourceId={source.id}
        deleteSource={handleDeleteSource}
      />

      <LabeledInput
        targetStateId={source.id}
        label={source.id}
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
      {source &&
        source.dataArr.map((data) => (
          <BenchMarkData
            sourceId={source.id}
            data={data}
            handleChangeDataContent={handleChangeDataContent}
            handleDeleteData={handleDeleteData}
          />
        ))}
      <Button icon={<PlusOutlined />} onClick={() => handleAddData(source.id)}>
        <MediumText fontWeight={600}>벤치마크 데이터 추가하기</MediumText>
      </Button>
    </div>
  );
};

export default SourceItem;
