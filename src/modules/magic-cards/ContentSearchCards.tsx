import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function ContentSearchCards() {
  const optionsCards = [
    "Amonkhet",
    "Ixalan",
    "Zendikar",
    "Ravnica",
    "Onslaught",
  ];

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
          <InputLabel id="demo-simple-select-label">
            Selecione uma opção
          </InputLabel>
          <Select
            label="Selecione uma opção"
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
        >
          Buscar
        </Button>
      </Grid>
    </Grid>
  );
}
