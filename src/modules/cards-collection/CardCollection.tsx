import { Card, Stack } from "@mui/material";
import React from "react";
import ContentCollection from "./ContentCollection";

interface CollectionData {
  code: string;
  cards: {
    imageUrl: string;
    name: string;
    manaCost: string;
    colorIdentity: string;
    text: string;
  }[];
}

const CardCollection: React.FC<{ collectionData: CollectionData }> = ({
  collectionData,
}) => {
  console.log("Dados recebidos em CardCollection:", collectionData);

  return (
    <Stack
      padding="30px"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {collectionData.cards.map((card, index) => (
        <Stack padding="10px" key={index}>
          <Card
            sx={{
              width: 500,
              minHeight: 230,
              padding: "20px",
              backgroundColor: "#D7D7D7",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            <ContentCollection
              imageUrl={card.imageUrl}
              name={card.name}
              manaCost={card.manaCost}
              text={card.text}
              colorIdentity={card.colorIdentity}
            />
          </Card>
        </Stack>
      ))}
    </Stack>
  );
};

export default CardCollection;
