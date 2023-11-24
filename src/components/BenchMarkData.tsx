import { Input } from "antd";
import DeleteButton from "./buttons/DeleteButton";
import { MediumText } from "./styled/Text";
import { Data } from "../types/benchmark";
import { useSourceContext } from "../context/SourceContext";
type BenchMarkDataProps = {
  sourceId: string;
  data: Data;
};
const BenchMarkData: React.FC<BenchMarkDataProps> = ({ sourceId, data }) => {
  const { dispatch } = useSourceContext();
  return (
    <>
      <div
        style={{
          padding: "10px",
          margin: "10px 0px",
          border: "1px solid var(--colorBgContainerDisabled)",
          borderRadius: "8px",
          position: "relative",
          backgroundColor: "var(--colorBgContainerDisabled)",
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
          style={{
            marginTop: "10px",
          }}
        />
      </div>
    </>
  );
};

export default BenchMarkData;
