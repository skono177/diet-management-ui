import Button from "@mui/material/Button";

export type ButtonProps = {
  name?: string;
  variant?: "text" | "contained" | "outlined";
} & React.ComponentProps<typeof Button>;

export default function BaseButton({
  name = "未設定ボタン",
  variant = "text",
  ...props
}: ButtonProps) {
  return (
    <Button variant={variant} {...props}>
      {name}
    </Button>
  );
}
