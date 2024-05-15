import { Card, Stack, Typography } from "@mui/material";
import React from "react";

export interface CardDetails {
  code: string;
  name: string;
  block: string;
  releaseDate: string;
}

interface ContentCardsResultProps {
  cardDetails: CardDetails;
}

const ContentCardsResult: React.FC<ContentCardsResultProps> = ({
  cardDetails,
}) => {
  const { name, block, releaseDate } = cardDetails;

  return (
    <Stack spacing={1}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="caption">{block}</Typography>
      <Stack alignItems="flex-end">
        <Card
          variant="outlined"
          sx={{
            paddingY: "10px",
            paddingX: "15px",
            height: "18px",
            width: "35%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Typography>{releaseDate}</Typography>
        </Card>
      </Stack>
    </Stack>
  );
};

export default ContentCardsResult;
