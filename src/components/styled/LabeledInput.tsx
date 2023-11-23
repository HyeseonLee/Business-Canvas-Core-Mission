import { Flex, Input } from "antd";
import { InputLabelText } from "./Text";

type Props = {
  targetStateId?: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeWithId?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  inputSize?: string;
};
const LabeledInput = ({
  targetStateId,
  label,
  value,
  onChange,
  onChangeWithId,
  inputSize,
}: Props): JSX.Element => {
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}:</InputLabelText>
      <Input
        name={label}
        value={value}
        // onChange={(e) => onChange && onChange(e)}
        onChange={(e) => {
          if (onChangeWithId && targetStateId) {
            console.log("withID Version");
            onChangeWithId(e, targetStateId);
          } else if (onChange) {
            console.log("그냥 Change 버전");
            onChange(e);
          }
        }}
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
