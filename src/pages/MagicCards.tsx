import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PageHeader from "../components/PageHeader";
import ContentSearchCards from "../modules/cards-result-search/ContentSearchCards";

export default function MagicCards() {
  return (
    <>
      <PageHeader
        actions={<AutoFixHighIcon sx={{ fontSize: "50px" }} />}
        titlePage="Cartas Mágicas"
        children={<ContentSearchCards />}
      />
    </>
  );
}
