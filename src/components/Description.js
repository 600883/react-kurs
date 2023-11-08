import React, { useState } from "react";
import { Typography, Box, TextField, Switch } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
    "Start dagen din med oversikt og inspirasjon. Her på Daily får du tilgang til dine viktigste oppgaver, dagens vær og en daglig dose med inspirasjon.";

  const [value, setValue] = useState("heiehi");

  const [checked, setChecked] = useState(false);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>

      <Switch value={checked} onChange={(e) => setChecked(e.target.value)}/>

      
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)} />

    </Box>
  );
};

export default Description;
