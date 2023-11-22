import { MinusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { MediumText } from "./Text";

type Props = {
  onClick: () => void;
};
const DeleteButton = ({ onClick }: Props): JSX.Element => {
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
        onClick={onClick}
      >
        <MediumText fontColor="#ffffff" fontWeight={600}>
          삭제
        </MediumText>
      </Button>
    </ConfigProvider>
  );
};

export default DeleteButton;
