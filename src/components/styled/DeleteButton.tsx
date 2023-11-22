import { MinusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { MediumText } from "./Text";

const DeleteButton = ({ ...props }) => (
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
        // backgroundColor: "#ff4d4f",
      }}
      {...props}
    >
      <MediumText fontColor="#ffffff" fontWeight={600}>
        삭제
      </MediumText>
    </Button>
  </ConfigProvider>
);

export default DeleteButton;
