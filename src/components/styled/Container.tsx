import styled from "styled-components";
import { Flex } from "antd";

type OuterContainerProps = {
  flexBasis?: string;
};
export const PageContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 30px;
`;
export const OuterContainer = styled.div<OuterContainerProps>`
  padding: 16px 12px 12px 12px;
  flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : "100%")};
`;
