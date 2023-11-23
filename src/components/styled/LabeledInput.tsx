import { Flex, Input } from "antd";
import { InputLabelText } from "./Text";

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeee?: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    key: string,
    value: string
  ) => void;
  sourceId?: string;
  dataId?: string;

  onChangeWithId?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  inputSize?: string;
};
const LabeledInput = ({
  label,
  value,
  onChange,
  inputSize,

  sourceId,
  dataId,
  onChangeWithId,
}: Props): JSX.Element => {
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}:</InputLabelText>
      <Input
        name={label}
        value={value}
        onChange={(e) => onChange(e)}
        // onChange={(e) => onChange && onChange(e)}
        /*        onChange={(e) => {
          if (onChangeWithId && sourceId) {
            console.log("withID Version");
            onChangeWithId(e, sourceId);
          } else if (onChange) {
            console.log("그냥 Change 버전");
            onChange(e, sourceId, label, e.target.value);
          }
        }}*/
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
