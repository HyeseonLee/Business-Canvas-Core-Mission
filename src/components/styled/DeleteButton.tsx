import { MinusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { MediumText } from "./Text";

type Props = {
  targetSourceId: string;
  targetDataId?: string;
  deleteSource?: (sourceId: string) => void;
  deleteData?: (sourceId: string, dataId: string) => void;
};
const DeleteButton = ({
  targetSourceId,
  targetDataId,
  deleteSource,
  deleteData,
}: Props): JSX.Element => {
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
          if (deleteData && targetSourceId && targetDataId) {
            deleteData(targetSourceId, targetDataId);
          } else if (deleteSource && targetSourceId) {
            deleteSource(targetSourceId);
          }
        }}
      >
        <MediumText fontColor="#ffffff" fontWeight={600}>
          삭제
        </MediumText>
      </Button>
    </ConfigProvider>
  );
};

export default DeleteButton;
