import { Button } from "antd";
import { MediumText } from "../styled/Text";
import { PlusOutlined } from "@ant-design/icons";
type Props = {
  onClick: () => void;
  text: string;
};
const AddButton = ({ onClick, text }: Props): JSX.Element => {
  return (
    <Button
      icon={<PlusOutlined />}
      onClick={onClick}
      style={{ display: "block", marginTop: "10px" }}
    >
      <MediumText fontWeight={600}>{text}</MediumText>
    </Button>
  );
};

export default AddButton;
