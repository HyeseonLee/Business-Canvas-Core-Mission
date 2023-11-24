import { LargeText, MediumText } from "./styled/Text";
import { Button, Flex } from "antd";
import { BookTwoTone } from "@ant-design/icons";
import { OuterContainer } from "./styled/Container";
import { usePreviewContext } from "../context/PreviewContext";

const BenchMarkPreview: React.FC = () => {
  const { previewData } = usePreviewContext();
  return (
    <OuterContainer flexBasis="45%">
      <LargeText>
        {previewData
          ? previewData.title
            ? previewData.title
            : "벤치마크 제목 미리보기"
          : "벤치마크 제목 미리보기"}
      </LargeText>
      <div
        style={{
          padding: "6px 14px 10px 14px",
          margin: "10px 0px",
          borderRadius: "5px",
          backgroundColor: "var(--colorBgContainerDisabled)",
        }}
      >
        <MediumText>
          {previewData
            ? previewData.description
              ? previewData.description
              : "벤치마크 용어 설명 미리보기"
            : "벤치마크 용어 설명 미리보기"}
        </MediumText>
      </div>

      {previewData.sources &&
        previewData.sources.map((source) => (
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
                {source.title ? source.title : "벤치마크 출처 제목 미리보기"}
              </MediumText>
              <Button
                type="text"
                href={source.url ? source.url : "#"}
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
            {source.dataArr &&
              source.dataArr.map((data) => (
                <div
                  style={{
                    padding: "8px",
                    border: "1px solid var(--colorBgContainerDisabled)",
                    borderRadius: "6px",
                    backgroundColor: "var(--colorBgContainer)",
                  }}
                >
                  <MediumText>
                    {data.content ? data.content : "벤치마크 데이터 미리보기"}
                  </MediumText>
                </div>
              ))}
          </div>
        ))}
    </OuterContainer>
  );
};
export default BenchMarkPreview;
