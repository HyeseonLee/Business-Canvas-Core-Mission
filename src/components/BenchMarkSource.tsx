import BenchMarkSourceItem from "./BenchMarkSourceItem";
import { Button } from "antd";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";
import {
  useSourceContext,
  useSourceDispatchContext,
} from "../context/SourceContext";
const BenchMarkSource: React.FC = () => {
  const dispatch = useSourceDispatchContext();
  const sources = useSourceContext();

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

      <Button
        icon={<PlusOutlined />}
        onClick={() =>
          dispatch({
            type: "ADD_SOURCE",
          })
        }
        style={{
          display: "block",
          marginTop: "10px",
        }}
      >
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </div>
  );
};

export default BenchMarkSource;
