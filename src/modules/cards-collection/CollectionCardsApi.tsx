import { Typography } from "@mui/material";
import DefaultLoading from "../../components/DefaultLoading";
import CardCollection from "./CardCollection";
import { useCollectionData } from "./hooks/useCollectionData";
import { useParams } from "react-router-dom";
import type { CodeCollection } from "../../router/models/routes.model";

const CollectionCardsApi: React.FC = () => {
  const { code } = useParams<CodeCollection>();
  console.log("CODE", code);

  if (code === undefined) {
    return <Typography>Code is undefined</Typography>;
  }

  const { data, isLoading, isError } = useCollectionData(code);
  console.log("DADOS", data);
  return (
    <>
      {isLoading ? (
        <DefaultLoading />
      ) : (
        <>
          {data && <CardCollection collectionData={data} />}
          {isError && <Typography>Erro ao buscar dados da API</Typography>}
        </>
      )}
    </>
  );
};

export default CollectionCardsApi;
