import { LargeText, MediumText } from "./styled/Text";
import { Flex } from "antd";
import { BookTwoTone } from "@ant-design/icons";
import { OuterContainer } from "./styled/Container";
import { usePreviewContext } from "../context/PreviewContext";
import MarkDown from "react-markdown";
import UrlButton from "./buttons/UrlButton";
import { BenchMarkInfo } from "../types/benchmark";
type BenchMarkPreviewProps = {
  previewData: BenchMarkInfo;
};
const BenchMarkPreview: React.FC<BenchMarkPreviewProps> = ({ previewData }) => {
  return (
    <OuterContainer flexbasis="45%">
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
        {/* markdown 지원 */}
        <MediumText>
          <MarkDown>
            {previewData
              ? previewData.description
                ? previewData.description
                : "벤치마크 용어 설명 미리보기"
              : "벤치마크 용어 설명 미리보기"}
          </MarkDown>
        </MediumText>
      </div>

      {previewData.sources &&
        previewData.sources.map((source) => (
          <div
            key={source.id}
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
              <MediumText fontWeight={600} marginright="4px" marginleft="4px">
                {source.title ? source.title : "벤치마크 출처 제목 미리보기"}
              </MediumText>
              <UrlButton
                href={source.url.trim() ? source.url : undefined}
                target={source.url.trim() !== "" ? "_blank" : ""}
              />
            </Flex>

            {source.dataArr &&
              source.dataArr.map((data) => (
                <div
                  key={data.id}
                  style={{
                    padding: "8px",
                    border: "1px solid var(--colorBgContainerDisabled)",
                    borderRadius: "6px",
                    backgroundColor: "var(--colorBgContainer)",
                    marginTop: "10px",
                  }}
                >
                  {/* markdown 지원 */}
                  <MediumText>
                    <MarkDown>
                      {data.content ? data.content : "벤치마크 데이터 미리보기"}
                    </MarkDown>
                  </MediumText>
                </div>
              ))}
          </div>
        ))}
    </OuterContainer>
  );
};
export default BenchMarkPreview;
