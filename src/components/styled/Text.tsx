import { Typography } from "antd";
import styled from "styled-components";

type Props = {
  fontWeight?: number;
  fontColor?: string;
};

export const LargeText = styled(Typography.Text)`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const MediumText = styled(Typography.Text)<Props>`
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => (props ? props.fontWeight : 400)};
  line-height: 20px;
  color: ${(props) => (props.fontColor ? props.fontColor : "#000000")};
`;

export const InputLabelText = styled(Typography.Text)`
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-right: 10px;
  flex-shrink: 0;
`;
