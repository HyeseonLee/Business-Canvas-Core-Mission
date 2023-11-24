import { Flex, Input } from "antd";
import { InputLabelText } from "../styled/Text";
import styled from "styled-components";

const CustomInput = styled(Input)<{ inputsize?: string }>`
  white-space: "nowrap";
  overflow: "hidden";
  text-overflow: "ellipsis";
  width: ${(props) => props.inputsize || "auto"};
`;
type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputsize?: string;
};

const LabeledInput = ({
  label,
  name,
  value,
  onChange,
  inputsize,
}: Props): JSX.Element => {
  return (
    <Flex justify="flex-start" align="center" style={{ marginBottom: "10px" }}>
      <InputLabelText>{label}:</InputLabelText>
      <CustomInput
        name={name}
        value={value}
        onChange={onChange}
        inputsize={inputsize}
      />
    </Flex>
  );
};

export default LabeledInput;
