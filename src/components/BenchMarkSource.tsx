import { Button, Flex, Input } from "antd";
import { InputLabelText, MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";
import BenchMarkData from "./BenchMarkData";
import DeleteButton from "./styled/DeleteButton";
import LabeledInput from "./styled/LabeledInput";
export default function BenchMarkSource() {
  return (
    <>
      <MediumText fontWeight={600}>벤치마크 출처</MediumText>
      <div
        style={{
          padding: "10px",
          border: "1px solid #f0f0f0",
          borderRadius: "0 0 8px 8px",
          position: "relative",
        }}
      >
        <DeleteButton />

        <LabeledInput
          label="제목:"
          value="제목"
          onChange={() => {}}
          inputSize="60%"
        />

        <LabeledInput
          label="URL:"
          value="url"
          onChange={() => {}}
          inputSize="60%"
        />

        {/* 벤치마크 데이터 */}
        <BenchMarkData />
      </div>

      <Button
        icon={<PlusOutlined />}
        onClick={() => alert("벤치마크 출처 추가하기")}
      >
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </>
  );
}
