import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import MagicCardsApi from "./MagicCardsApi";

export default function ContentSearchCards() {
  const optionsCards = [
    "Amonkhet",
    "Ixalan",
    "Zendikar",
    "Ravnica",
    "Onslaught",
  ];

  const [selectedOptionBloco, setSelectedOptionBloco] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOptionBloco(event.target.value);
  };

  const handleSearch = () => {
    console.log("Opção selecionada:", selectedOptionBloco);
    setSearchValue(selectedOptionBloco);
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
        <CustomButton
          titleButton="Buscar"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        />
      </Grid>
      <MagicCardsApi selectedOptionBloco={searchValue} />
    </Grid>
  );
}
