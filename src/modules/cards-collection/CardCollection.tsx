import { Button, Card, CardContent, Stack } from "@mui/material";
import React, { useState } from "react";
import ContentCollection from "./ContentCollection";
import { useParams } from "react-router-dom";
import type { CodeCollection } from "../../router/models/routes.model";

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

  const [deletedCards, setDeletedCards] = useState<string[]>([]);

  const { code } = useParams<CodeCollection>();
  console.log("ID CODE", code);

  const handleDeleteCard = (cardId: string) => {
    if (deletedCards.length < 5) {
      setDeletedCards([...deletedCards, cardId]);
      console.log(`Card ${cardId} excluído.`);
    } else {
      console.log("Limite de exclusão de cartas atingido.");
    }
  };

  const handleConfirmDelete = () => {
    console.log("Exclusão confirmada.");
    setDeletedCards([]);
  };

  return (
    <>
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

                backgroundColor: "#D7D7D7",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
              }}
            >
              <CardContent sx={{ padding: "20px" }}>
                <ContentCollection
                  imageUrl={card.imageUrl}
                  name={card.name}
                  manaCost={card.manaCost}
                  text={card.text}
                  colorIdentity={card.colorIdentity}
                />
              </CardContent>
              <Button
                variant="contained"
                sx={{ width: "100%", backgroundColor: "#400909" }}
                onClick={() => handleDeleteCard(`${code}-${index}`)}
              >
                Delete Card
              </Button>
            </Card>
          </Stack>
        ))}
      </Stack>
      {deletedCards.length > 0 && (
        <Button variant="contained" onClick={handleConfirmDelete}>
          Confirm Delete
        </Button>
      )}
    </>
  );
};

export default CardCollection;
