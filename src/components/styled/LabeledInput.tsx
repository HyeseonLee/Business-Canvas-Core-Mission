import { Flex, Input } from "antd";
import { InputLabelText } from "./Text";

type Props = {
  label: string;
  value: string;
  onChange: () => void;
  inputSize?: string;
};
const LabeledInput = ({
  label,
  value,
  onChange,
  inputSize,
}: Props): JSX.Element => {
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}</InputLabelText>
      <Input
        value={value}
        onChange={onChange}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          ...(inputSize && { width: inputSize }),
        }}
      />
    </Flex>
  );
};

export default LabeledInput;
