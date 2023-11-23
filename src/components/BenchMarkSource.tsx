import { useState } from "react";
import SourceItem from "./SourceItem";
import { Source } from "../types/benchmark";
import { v4 as uuidv4 } from "uuid";
import { Button } from "antd";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";

const BenchMarkSource: React.FC = () => {
  function handleChangeSourceTitle(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    setSources(
      sources.map((source) => {
        if (source.id === id) {
          return {
            ...source,
            title: e.target.value,
          };
        } else {
          return source;
        }
      })
    );
  }

  function handleChangeSourceURL(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    console.log("🪄 벤치마크 출처 URL을 변경합니다.");
    setSources(
      sources.map((source) => {
        if (source.id === id) {
          return {
            ...source,
            url: e.target.value,
          };
        } else {
          return source;
        }
      })
    );
  }

  function handleAddSource() {
    console.log("🪄 새로운 벤치마크 출처를 추가합니다.");
    setSources([
      ...sources,
      {
        id: uuidv4(),
        title: "",
        url: "",
        dataArr: [
          {
            id: uuidv4(),
            content: "",
          },
        ],
      },
    ]);
  }

  function handleDeleteSource(id: string) {
    console.log("🧹 벤치마크 출처를 삭제합니다.");
    setSources(sources.filter((source) => source.id !== id));
  }

  function handleChangeDataContent(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    sourceId: string,
    dataId: string
  ): void {
    console.log("🪄 데이터 내용을 변경합니다.");
    setSources((prevSources) =>
      prevSources.map((source) => {
        if (source.id === sourceId) {
          return {
            ...source,
            dataArr: source.dataArr.map((data) => {
              if (data.id === dataId) {
                return {
                  ...data,
                  content: e.target.value,
                };
              } else {
                return data;
              }
            }),
          };
        } else {
          return source;
        }
      })
    );
  }

  function handleAddData(sourceId: string): void {
    console.log(`🪄 데이터를 추가합니다. sourceId${sourceId}`);
    setSources(
      sources.map((source) => {
        if (source.id === sourceId) {
          return {
            ...source,
            dataArr: [
              ...source.dataArr,
              {
                id: uuidv4(),
                content: "",
              },
            ],
          };
        } else {
          return source;
        }
      })
    );
  }

  function handleDeleteData(sourceId: string, dataId: string): void {
    console.log(
      `🧹 데이터를 삭제합니다. sourceId : ${sourceId} dataId: ${dataId}`
    );
    setSources(
      sources.map((source) => {
        if (source.id === sourceId) {
          return {
            ...source,
            dataArr: source.dataArr.filter((data) => data.id !== dataId),
          };
        } else {
          return source;
        }
      })
    );
  }
  return (
    <>
      <MediumText fontWeight={600}>벤치마크 출처</MediumText>
      {sources &&
        sources.map((source) => (
          <SourceItem
            source={source}
            setSource={setSources}
            handleChangeSourceTitle={handleChangeSourceTitle}
            handleChangeSourceURL={handleChangeSourceURL}
            handleDeleteSource={handleDeleteSource}
            handleChangeDataContent={handleChangeDataContent}
            handleAddData={handleAddData}
            handleDeleteData={handleDeleteData}
          />
        ))}
      <Button icon={<PlusOutlined />} onClick={handleAddSource}>
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </>
  );
};

export default BenchMarkSource;
