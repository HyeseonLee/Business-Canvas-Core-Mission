import { Source } from "../types/benchmark";
import DeleteButton from "./buttons/DeleteButton";
import LabeledInput from "./inputs/LabeledInput";
import { useSourceContext } from "../context/SourceContext";
import BenchMarkData from "./BenchMarkData";
import AddButton from "./buttons/AddButton";

type SourceItemProps = {
  source: Source;
};

const BenchMarkSourceItem: React.FC<SourceItemProps> = ({ source }) => {
  const { dispatch } = useSourceContext();
  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "CHANGE_SOURCE",
      id: source.id,
      name: e.target.name,
      value: e.target.value,
    });

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
        <DeleteButton
          onClick={() =>
            dispatch({
              type: "DELETE_SOURCE",
              id: source.id,
            })
          }
        />
        <LabeledInput
          label="제목"
          name="title"
          value={source.title}
          inputsize="60%"
          onChange={handleChangeSource}
        />
        <LabeledInput
          label="URL"
          name="url"
          value={source.url}
          inputsize="60%"
          onChange={handleChangeSource}
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
