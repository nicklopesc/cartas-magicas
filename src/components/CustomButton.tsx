import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface CustomButtonProps {
  titleButton: string;
  startIcon?: ReactNode;
  onClick: () => void;
}

export default function CustomButton({
  titleButton,
  startIcon,
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      fullWidth
      sx={{
        backgroundColor: "#000000",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
      onClick={onClick}
    >
      {titleButton}
    </Button>
  );
}
