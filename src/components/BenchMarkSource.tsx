import { useState } from "react";
import SourceItem from "./SourceItem";
import { Source } from "../types/benchmark";
import { v4 as uuidv4 } from "uuid";
import { Button } from "antd";
import { MediumText } from "./styled/Text";
import { PlusOutlined } from "@ant-design/icons";

const BenchMarkSource: React.FC = () => {
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
