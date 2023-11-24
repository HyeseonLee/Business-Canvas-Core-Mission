import { Flex, Input } from "antd";
import { InputLabelText } from "./styled/Text";
import { useSourceDispatchContext } from "../context/SourceContext";

type Props = {
  label: string;
  name?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputSize?: string;
  sourceId?: string;
};
const LabeledInput = ({
  label,
  name,
  value,
  onChange,
  inputSize,
  sourceId,
}: Props): JSX.Element => {
  const dispatch = useSourceDispatchContext();
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}:</InputLabelText>
      <Input
        name={name}
        value={value}
        onChange={(e) => {
          if (sourceId) {
            dispatch({
              type: "CHANGE_SOURCE",
              id: sourceId,
              name: e.target.name,
              value: e.target.value,
            });
          } else if (onChange) {
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
