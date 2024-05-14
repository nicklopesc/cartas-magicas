import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PageHeader from "../components/PageHeader";
import ContentSearchCards from "../modules/ContentSearchCards";

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
