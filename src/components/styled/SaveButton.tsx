import { Flex, Button } from "antd";
import { MediumText } from "./Text";

type Props = {
  onClick: () => void;
};
const SaveButton = ({ onClick }: Props): JSX.Element => {
  return (
    <Flex justify="flex-end">
      <Button
        type="primary"
        style={{
          backgroundColor: "#45b178",
        }}
        onClick={onClick}
      >
        <MediumText fontColor="#ffffff" fontWeight={600}>
          저장
        </MediumText>
      </Button>
    </Flex>
  );
};

export default SaveButton;
