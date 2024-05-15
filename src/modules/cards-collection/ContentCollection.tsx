import { CardMedia, Grid, Typography } from "@mui/material";
export interface ContentCollectionProps {
  imageUrl: string;
  name: string;
  manaCost: string;
  colorIdentity: string;
  text: string;
}

export default function ContentCollection({
  imageUrl,
  name,
  manaCost,
  colorIdentity,
  text,
}: ContentCollectionProps) {
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Card-Collection"
          sx={{ width: "75%", height: "auto" }}
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption" sx={{ marginTop: "30px" }}>
          {manaCost}
        </Typography>
        <Typography variant="body2">{colorIdentity}</Typography>
        <Typography variant="body2">{text}</Typography>
      </Grid>
    </Grid>
  );
}
