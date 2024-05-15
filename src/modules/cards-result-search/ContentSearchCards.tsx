import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ContentMagicCardsApi from "./ContentMagicCardsApi";

export default function ContentSearchCards() {
  const optionsCards = [
    "Amonkhet",
    "Ixalan",
    "Zendikar",
    "Ravnica",
    "Onslaught",
  ];

  const [selectedOptionBloco, setSelectedOptionBloco] = useState("");

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOptionBloco(event.target.value);
  };

  const handleSearch = () => {
    console.log("Opção selecionada:", selectedOptionBloco);
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      padding="30px"
      marginTop="40px"
    >
      <Grid item xs={6}>
        <TextField label="Nome" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Bloco</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOptionBloco}
            onChange={handleSelectChange}
            label="Bloco"
            variant="outlined"
            style={{ borderRadius: 8 }}
            fullWidth
          >
            {optionsCards.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          fullWidth
          sx={{ backgroundColor: "#000000" }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Grid>
      <ContentMagicCardsApi selectedOptionBloco={selectedOptionBloco} />
    </Grid>
  );
}
