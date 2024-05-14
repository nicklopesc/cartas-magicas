import { CircularProgress, Stack, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export type LoadingProps = {
  loading?: boolean;
};

export default function DefaultLoading({ loading = true }: LoadingProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  return (
    <>
      {loading && (
        <ThemeProvider theme={theme}>
          <Stack
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100%"
          >
            <CircularProgress
              color="primary"
              size={100}
              sx={{ zIndex: 1, margin: "auto" }}
            />
          </Stack>
        </ThemeProvider>
      )}
    </>
  );
}
