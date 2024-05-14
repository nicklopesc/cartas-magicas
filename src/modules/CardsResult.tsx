import React from "react";
import { Card, Stack } from "@mui/material";
import ContentCardsResult, { CardDetails } from "./ContentCardsResult";

interface CardsResultProps {
  cardData: { [key: string]: CardDetails[] } | undefined;
}

const CardsResult: React.FC<CardsResultProps> = ({ cardData }) => {
  // console.log("CARDS", cardData);

  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
      {cardData &&
        Object.keys(cardData).map((key: string) =>
          cardData[key].map((set: CardDetails, index: number) => (
            <Stack padding="10px">
              <Card
                key={`${key}-${index}`}
                sx={{
                  width: 250,
                  minHeight: "20px",
                  padding: "20px",
                  backgroundColor: "#D7D7D7",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
                }}
              >
                <ContentCardsResult cardDetails={set} />
              </Card>
            </Stack>
          ))
        )}
    </Stack>
  );
};

export default CardsResult;
