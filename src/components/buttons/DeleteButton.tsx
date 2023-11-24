import { MinusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { MediumText } from "../styled/Text";
import { useSourceContext } from "../../context/SourceContext";

type Props = {
  target: string;
  sourceId: string;
  dataId?: string;
};
const DeleteButton = ({ target, sourceId, dataId }: Props): JSX.Element => {
  const { dispatch } = useSourceContext();

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#ff4d4f",
          },
        },
      }}
    >
      <Button
        type="primary"
        size="small"
        icon={<MinusOutlined />}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
        onClick={() => {
          if (target === "source") {
            dispatch({
              type: "DELETE_SOURCE",
              id: sourceId,
            });
          }
          if (dataId && target === "data") {
            dispatch({
              type: "DELETE_DATA",
              sourceId,
              dataId,
            });
          } else if (sourceId && dataId) {
          }
        }}
      >
        <MediumText color="#ffffff" fontWeight={600}>
          삭제
        </MediumText>
      </Button>
    </ConfigProvider>
  );
};

export default DeleteButton;
