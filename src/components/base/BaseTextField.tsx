import TextField from "@mui/material/TextField";

export type TextFieldProps = {
  prefixId?: string;
  variant: "outlined" | "filled" | "standard";
  label?: string;
};

export default function BaseTextField({
  prefixId = "base-input",
  label = "",
  variant = "outlined",
}: TextFieldProps) {
  return (
    <TextField
      className="p-2"
      id={prefixId + "-text-field"}
      label={label}
      variant={variant}
    />
  );
}
