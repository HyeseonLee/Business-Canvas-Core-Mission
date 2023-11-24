import { Source } from "../types/benchmark";
import DeleteButton from "./buttons/DeleteButton";
import LabeledInput from "./LabeledInput";
import { useSourceContext } from "../context/SourceContext";
import BenchMarkData from "./BenchMarkData";
import AddButton from "./buttons/AddButton";

type SourceItemProps = {
  source: Source;
};

const BenchMarkSourceItem: React.FC<SourceItemProps> = ({ source }) => {
  const { dispatch } = useSourceContext();

  return (
    <div
      key={source.id}
      style={{
        padding: "10px",
        margin: "10px 0px",
        border: "1px solid #f0f0f0",
        borderRadius: "6px",
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

      {source &&
        source.dataArr.map((data) => (
          <BenchMarkData key={data.id} sourceId={source.id} data={data} />
        ))}

      <AddButton
        text="벤치마크 데이터 추가하기"
        onClick={() =>
          dispatch({
            type: "ADD_DATA",
            sourceId: source.id,
          })
        }
      />
    </div>
  );
};

export default BenchMarkSourceItem;
