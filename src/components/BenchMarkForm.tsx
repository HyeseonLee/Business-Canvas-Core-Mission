import React, { useState } from "react";
import { Flex, Input, Button } from "antd";
import { LargeText, InputLabelText, MediumText } from "./styled/Text";
import Source from "./Source";

export default function BenchMarkForm() {
  return (
    <>
      <div>
        <LargeText>Benchmark</LargeText>
        <Flex justify="flex-start" align="center">
          <InputLabelText>제목:</InputLabelText>
          <Input />
        </Flex>
        <Flex justify="flex-start" align="center">
          <InputLabelText>용어 설명:</InputLabelText>
          <Input />
        </Flex>
      </div>

      <hr />
      {/* 벤치마크 출처 */}
      <Source />

      <Flex justify="flex-end">
        <Button
          type="primary"
          style={{
            backgroundColor: "#45b178",
          }}
        >
          <MediumText fontColor="#ffffff" fontWeight={600}>
            저장
          </MediumText>
        </Button>
      </Flex>
    </>
  );
}

const benchMarkStatus = {
  title: "제목입니다.",
  describe: "용어 설명입니다.",
};

const benchMarkSource = [
  {
    id: 0,
    source_title: "출처 제목입니다.",
    source_url: "출처 url입니다.",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.0-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.0-1",
      },
    ],
  },
  {
    id: 1,
    source_title: "출처 제목입니다.1",
    source_url: "출처 url입니다.1",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.1-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.1-1",
      },
      {
        id: 2,
        data: "데이터 내용입니다.1-2",
      },
    ],
  },
  {
    id: 2,
    source_title: "출처 제목입니다.2",
    source_url: "출처 url입니다.2",
    data: [
      {
        id: 0,
        data: "데이터 내용입니다.2-0",
      },
      {
        id: 1,
        data: "데이터 내용입니다.2-1",
      },
      {
        id: 2,
        data: "데이터 내용입니다.2-2",
      },
      {
        id: 3,
        data: "데이터 내용입니다.2-3",
      },
    ],
  },
];
