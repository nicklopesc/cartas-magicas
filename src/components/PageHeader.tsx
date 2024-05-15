import { Box, Stack, Typography } from "@mui/material";
import { type ReactNode } from "react";

export type PageHeaderProps = {
  titlePage: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export default function PageHeader({
  titlePage,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        paddingTop="70px"
        paddingX="30px"
      >
        {actions}
        <Typography variant="h3" fontWeight="bold" marginLeft="10px">
          {titlePage}
        </Typography>
      </Stack>
      <Box>{children}</Box>
    </>
  );
}
