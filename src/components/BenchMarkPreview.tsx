import { LargeText, MediumText } from "./styled/Text";
import { Button, Flex } from "antd";
import { BookTwoTone } from "@ant-design/icons";
import { OuterContainer } from "./styled/Container";
const BenchMarkPreview: React.FC = () => {
  return (
    <OuterContainer flexBasis="45%">
      <LargeText>벤치마크 제목</LargeText>
      <div
        style={{
          padding: "6px 14px 10px 14px",
          margin: "10px 0px",
          borderRadius: "5px",
          backgroundColor: "var(--colorBgContainerDisabled)",
        }}
      >
        <MediumText>벤치마크내용</MediumText>
      </div>

      <div
        style={{
          padding: "10px 6px",
          borderTop: "1px dashed var(--colorBorder)",
          marginBottom: "10px",
        }}
      >
        <Flex
          justify="flex-start"
          align="center"
          style={{ padding: "4px 0px", marginBottom: "10px" }}
        >
          <BookTwoTone />
          <MediumText fontWeight={600} marginRight="4px" marginLeft="4px">
            벤치마크 출처 제목
          </MediumText>
          <Button
            type="text"
            href="http://www.naver.com"
            target="_blank"
            style={{
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 8px",
            }}
          >
            <LargeText fontWeight={400} color="var(--colorPrimaryBase)">
              URL
            </LargeText>
          </Button>
        </Flex>

        <div
          style={{
            padding: "8px",
            border: "1px solid var(--colorBgContainerDisabled)",
            borderRadius: "6px",
            backgroundColor: "var(--colorBgContainer)",
          }}
        >
          <MediumText>벤치마크 데이터 내용</MediumText>
        </div>
      </div>
    </OuterContainer>
  );
};
export default BenchMarkPreview;
