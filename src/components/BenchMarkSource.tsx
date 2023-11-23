import { useState } from "react";
import SourceItem from "./SourceItem";
import { Source } from "../types/source";
import { v4 as uuidv4 } from "uuid";
import { Button } from "antd";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";

const BenchMarkSource: React.FC = () => {
  const [sources, setSources] = useState<Source[]>([
    {
      id: uuidv4(),
      title: "",
      url: "",
      data: [
        {
          id: uuidv4(),
          content: "",
        },
      ],
    },
  ]);

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
        data: [
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
  return (
    <>
      <MediumText fontWeight={600}>벤치마크 출처</MediumText>
      {sources &&
        sources.map((source) => (
          <SourceItem
            source={source}
            handleChangeSourceTitle={handleChangeSourceTitle}
            handleChangeSourceURL={handleChangeSourceURL}
            handleDeleteSource={handleDeleteSource}
          />
        ))}
      <Button icon={<PlusOutlined />} onClick={handleAddSource}>
        <MediumText fontWeight={600}>벤치마크 출처 추가하기</MediumText>
      </Button>
    </>
  );
};

export default BenchMarkSource;
