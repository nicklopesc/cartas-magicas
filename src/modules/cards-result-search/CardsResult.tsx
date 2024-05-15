import React from "react";
import { Button, Card, CardContent, Stack } from "@mui/material";
import ContentCardsResult, { CardDetails } from "./ContentCardsResult";
import { PathConstants } from "../../router";
import { Link } from "react-router-dom";

interface CardsResultProps {
  cardData: { [key: string]: CardDetails[] } | undefined;
}

const CardsResult: React.FC<CardsResultProps> = ({ cardData }) => {
  console.log("CARDS", cardData);

  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
      {cardData &&
        Object.keys(cardData).map((key: string) =>
          cardData[key].map((set: CardDetails, index: number) => (
            <Stack padding="10px" key={`${key}-${index}`}>
              <Card
                sx={{
                  width: 300,
                  minHeight: "20px",
                  backgroundColor: "#D7D7D7",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
                }}
              >
                <CardContent sx={{ padding: "20px" }}>
                  <ContentCardsResult cardDetails={set} />
                </CardContent>
                <Button
                  component={Link}
                  to={PathConstants.buildCollectionID(set.code)}
                  size="small"
                  variant="contained"
                  sx={{ backgroundColor: "#000000", width: "100%" }}
                >
                  Abrir Coleção
                </Button>
              </Card>
            </Stack>
          ))
        )}
    </Stack>
  );
};

export default CardsResult;
