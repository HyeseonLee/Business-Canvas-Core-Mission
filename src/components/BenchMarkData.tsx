import { Button, Input } from "antd";
import DeleteButton from "./styled/DeleteButton";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";
import { Data, Source } from "../types/benchmark";
type BenchMarkDataProps = {
  sourceId: string;
  data: Data;
  handleChangeDataContent: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    sourceId: string,
    dataId: string
  ) => void;
  handleDeleteData: (sourceId: string, dataId: string) => void;
};
const BenchMarkData: React.FC<BenchMarkDataProps> = ({
  sourceId,
  data,
  handleChangeDataContent,
  handleDeleteData,
}) => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
          position: "relative",
          backgroundColor: "#f0f0f0",
        }}
      >
        <DeleteButton
          targetSourceId={sourceId}
          targetDataId={data.id}
          deleteData={handleDeleteData}
        />
        <MediumText fontWeight={600}>벤치마크 데이터 {data.id}</MediumText>
        <Input.TextArea
          rows={2}
          value={data.content}
          onChange={(e) => handleChangeDataContent(e, sourceId, data.id)}
        />
      </div>
    </>
  );
};

export default BenchMarkData;
