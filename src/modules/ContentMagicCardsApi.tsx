import { Typography } from "@mui/material";
import { useCardData } from "./hooks/useCardData";
import CardsResult from "./CardsResult";
import DefaultLoading from "../components/DefaultLoading";

interface ContentMagicCardsApiProps {
  selectedOptionBloco: string;
}

const ContentMagicCardsApi: React.FC<ContentMagicCardsApiProps> = ({
  selectedOptionBloco,
}) => {
  if (!selectedOptionBloco) {
    return null;
  }

  const { isLoading, data, isError } = useCardData({
    block: selectedOptionBloco,
  });

  return (
    <>
      {isLoading ? (
        <DefaultLoading />
      ) : (
        <>
          {data && <CardsResult cardData={data} />}
          {isError && <Typography>Erro ao buscar dados da API</Typography>}
        </>
      )}
    </>
  );
};

export default ContentMagicCardsApi;
