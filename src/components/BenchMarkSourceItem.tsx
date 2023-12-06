import { Source } from "../types/benchmark";
import DeleteButton from "./buttons/DeleteButton";
import LabeledInput from "./inputs/LabeledInput";
import { useSourceContext } from "../context/SourceContext";
import BenchMarkData from "./BenchMarkData";
import AddButton from "./buttons/AddButton";
import { useCallback } from "react";

type SourceItemProps = {
  source: Source;
};

const BenchMarkSourceItem: React.FC<SourceItemProps> = ({ source }) => {
  const { dispatch } = useSourceContext();

  const handleChangeSource = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: "CHANGE_SOURCE",
        id: source.id,
        name: e.target.name,
        value: e.target.value,
      }),
    [source.id]
  );
  const deleteButtonOnClick = useCallback(
    () =>
      dispatch({
        type: "DELETE_SOURCE",
        id: source.id,
      }),
    [source.id]
  );
  const addButtonOnClick = useCallback(
    () =>
      dispatch({
        type: "ADD_DATA",
        sourceId: source.id,
      }),
    [source.id]
  );

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
        <DeleteButton onClick={deleteButtonOnClick} />
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

      <AddButton text="벤치마크 데이터 추가하기" onClick={addButtonOnClick} />
    </div>
  );
};

export default BenchMarkSourceItem;
