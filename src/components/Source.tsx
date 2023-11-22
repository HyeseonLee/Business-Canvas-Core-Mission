import { Button, Card, Flex, Input } from "antd";
import { InputLabelText, MediumText } from "./styled/Text";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Data from "./Data";
export default function Source() {
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
        <Button
          type="primary"
          size="small"
          icon={<MinusOutlined />}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#ff4d4f",
          }}
        >
          <MediumText fontColor="#ffffff" fontWeight={600}>
            삭제
          </MediumText>
        </Button>

        <Flex justify="flex-start" align="center">
          <InputLabelText>제목:</InputLabelText>
          <Input style={{ width: "60%" }} />
        </Flex>
        <Flex justify="flex-start" align="center">
          <InputLabelText>URL:</InputLabelText>
          <Input style={{ width: "60%" }} />
        </Flex>

        {/* 벤치마크 데이터 */}
        <Data />
      </div>

      <Button icon={<PlusOutlined />}>
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </>
  );
}
