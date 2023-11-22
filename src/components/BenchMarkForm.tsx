import React, { useState } from "react";
import { Flex, Input } from "antd";
import { LargeText, InputLabelText } from "./styled/Text";

export default function BenchMarkForm() {
  return (
    <div>
      <LargeText>Benchmark</LargeText>
      <Flex justify={"flex-start"} align={"center"}>
        <InputLabelText>제목:</InputLabelText>
        <Input />
      </Flex>
      <Flex justify={"flex-start"} align={"center"}>
        <InputLabelText>용어 설명:</InputLabelText>
        <Input />
      </Flex>
    </div>
  );
}
