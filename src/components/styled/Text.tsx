import { Typography } from "antd";
import styled from "styled-components";
type LargeTextProps = {
  fontWeight?: number;
  color?: string;
};

type MediumTextProps = {
  fontWeight?: number;
  color?: string;
  marginRight?: string;
  marginLeft?: string;
  lineHeight?: string;
};

export const LargeText = styled(Typography.Text)<LargeTextProps>`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  line-height: 22px;
  color: ${(props) => (props.color ? props.color : "var(--colorText)")};
  font-variant-numeric: lining-nums tabular-nums;
`;

export const MediumText = styled(Typography.Text)<MediumTextProps>`
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "20px")};
  color: ${(props) => (props.color ? props.color : "var(--colorText)")};
  font-variant-numeric: lining-nums tabular-nums;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
`;

export const InputLabelText = styled(Typography.Text)`
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-right: 10px;
  flex-shrink: 0;
  color: var(--colorText);
  font-variant-numeric: lining-nums tabular-nums;
`;
