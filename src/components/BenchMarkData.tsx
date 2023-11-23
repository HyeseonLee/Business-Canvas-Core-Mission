import { Input } from "antd";
import DeleteButton from "./styled/DeleteButton";
import { MediumText } from "./styled/Text";
import { Data } from "../types/benchmark";
import { useSourceDispatchContext } from "../context/SourceContext";
type BenchMarkDataProps = {
  sourceId: string;
  data: Data;
};
const BenchMarkData: React.FC<BenchMarkDataProps> = ({ sourceId, data }) => {
  const dispatch = useSourceDispatchContext();
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
        <DeleteButton target="data" sourceId={sourceId} dataId={data.id} />

        <MediumText fontWeight={600}>벤치마크 데이터</MediumText>

        <Input.TextArea
          rows={2}
          value={data.content}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_DATA",
              sourceId,
              dataId: data.id,
              content: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default BenchMarkData;
