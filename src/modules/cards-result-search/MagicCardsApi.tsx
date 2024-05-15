import { Typography } from "@mui/material";
import { useCardData } from "./hooks/useCardData";
import CardsResult from "./CardsResult";
import DefaultLoading from "../../components/DefaultLoading";

interface MagicCardsApiProps {
  selectedOptionBloco: string;
}

const MagicCardsApi: React.FC<MagicCardsApiProps> = ({
  selectedOptionBloco,
}) => {
  const { data, isLoading, isError } = useCardData({
    block: selectedOptionBloco,
  });
  if (!selectedOptionBloco) {
    return null;
  }

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

export default MagicCardsApi;
