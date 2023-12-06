import BenchMarkSourceItem from "./BenchMarkSourceItem";
import { MediumText } from "./styled/Text";
import { useSourceContext } from "../context/SourceContext";
import AddButton from "./buttons/AddButton";
import React, { useCallback } from "react";

const BenchMarkSource: React.FC = () => {
  const { sources, dispatch } = useSourceContext();
  const addButtonOnClick = useCallback(() => {
    dispatch({
      type: "ADD_SOURCE",
    });
  }, []);

  return (
    <div
      style={{
        padding: "10px 0",
        borderTop: "1px solid var(--colorBorder)",
        marginBottom: "10px",
      }}
    >
      <MediumText fontWeight={600}>벤치마크 출처</MediumText>

      {sources &&
        sources.map((source) => (
          <BenchMarkSourceItem key={source.id} source={source} />
        ))}

      <AddButton text="벤치마크 출처 추가하기" onClick={addButtonOnClick} />
    </div>
  );
};

export default React.memo(BenchMarkSource);
