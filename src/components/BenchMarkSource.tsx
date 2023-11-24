import SourceItem from "./SourceItem";
import { Button } from "antd";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";
import { useSourceContext } from "../context/SourceContext";
import { useSourceDispatchContext } from "../context/SourceContext";
const BenchMarkSource: React.FC = () => {
  const sources = useSourceContext();
  const dispatch = useSourceDispatchContext();

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
        sources.map((source) => <SourceItem key={source.id} source={source} />)}

      <Button
        icon={<PlusOutlined />}
        onClick={() =>
          dispatch({
            type: "ADD_SOURCE",
          })
        }
      >
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </div>
  );
};

export default BenchMarkSource;
