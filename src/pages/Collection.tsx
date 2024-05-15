import StyleIcon from "@mui/icons-material/Style";
import PageHeader from "../components/PageHeader";
import CollectionCardsApi from "../modules/cards-collection/CollectionCardsApi";

export default function Collection() {
  return (
    <PageHeader
      actions={
        <StyleIcon sx={{ fontSize: "50px", transform: "rotate(180deg)" }} />
      }
      titlePage="Coleção de Cartas"
      children={<CollectionCardsApi />}
    />
  );
}
