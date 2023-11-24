import { Flex, Input } from "antd";
import { InputLabelText } from "./styled/Text";
import styled from "styled-components";

const CustomInput = styled(Input)<{ inputSize?: string }>`
  white-space: "nowrap";
  overflow: "hidden";
  text-overflow: "ellipsis";
  width: ${(props) => props.inputSize || "auto"};
`;
type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputSize?: string;
};

const LabeledInput = ({
  label,
  name,
  value,
  onChange,
  inputSize,
}: Props): JSX.Element => {
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}:</InputLabelText>
      <CustomInput
        name={name}
        value={value}
        onChange={onChange}
        inputSize={inputSize}
      />
    </Flex>
  );
};

export default LabeledInput;
