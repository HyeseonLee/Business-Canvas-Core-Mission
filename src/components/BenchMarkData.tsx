import { Button, Input } from "antd";
import DeleteButton from "./styled/DeleteButton";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";

export default function BenchMarkData() {
  return (
    <>
      <div
        style={{
          padding: "10px",
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
          position: "relative",
          backgroundColor: "#f0f0f0",
        }}
      >
        <DeleteButton />
        <MediumText fontWeight={600}>벤치마크 데이터</MediumText>
        <Input.TextArea rows={2} />
      </div>

      <Button
        icon={<PlusOutlined />}
        onClick={() => alert("벤치마크 데이터 추가하기")}
      >
        <MediumText fontWeight={600}>벤치마크 데이터 추가하기</MediumText>
      </Button>
    </>
  );
}
