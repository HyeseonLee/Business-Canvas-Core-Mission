import { Button } from "antd";
import { LargeText } from "../styled/Text";

type Props = {
  href: string | undefined;
  target: string;
};
const UrlButton = ({ href, target }: Props): JSX.Element => {
  return (
    <Button
      type="text"
      href={href}
      target={target}
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
  );
};
export default UrlButton;
