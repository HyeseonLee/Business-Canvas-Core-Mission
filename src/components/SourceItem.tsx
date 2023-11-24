import { Source } from "../types/benchmark";
import DeleteButton from "./styled/DeleteButton";
import LabeledInput from "./styled/LabeledInput";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { MediumText } from "./styled/Text";
import { useSourceDispatchContext } from "../context/SourceContext";
import BenchMarkData from "./BenchMarkData";
type SourceItemProps = {
  source: Source;
};

const SourceItem: React.FC<SourceItemProps> = ({ source }) => {
  const dispatch = useSourceDispatchContext();

  return (
    <div
      key={source.id}
      style={{
        padding: "10px",
        margin: "10px 0px",
        border: "1px solid #f0f0f0",
        borderRadius: "0 0 8px 8px",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <DeleteButton sourceId={source.id} target="source" />

        <LabeledInput
          label="제목"
          name="title"
          value={source.title}
          inputSize="60%"
          sourceId={source.id}
        />
        <LabeledInput
          label="URL"
          name="url"
          value={source.url}
          inputSize="60%"
          sourceId={source.id}
        />
      </div>
      {/* 벤치마크 데이터 */}
      {source &&
        source.dataArr.map((data) => (
          <BenchMarkData key={data.id} sourceId={source.id} data={data} />
        ))}

      <Button
        icon={<PlusOutlined />}
        onClick={() =>
          dispatch({
            type: "ADD_DATA",
            sourceId: source.id,
          })
        }
      >
        <MediumText fontWeight={600}>벤치마크 데이터 추가하기</MediumText>
      </Button>
    </div>
  );
};

export default SourceItem;
