import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

const Results = ({ paperClass, buttonClass, searchTerm, data: { title, year }, nomButton, addNom }) => {
  return (
  <Grid item>
  <Paper
    className={paperClass}
  >
    <h4>Results for "{searchTerm}":</h4>
    <br />
    {title ? <div>• {title} ({year})<Button className={buttonClass} variant="contained" color="default" onClick={(id) => addNom(title, year)} disabled={nomButton}>Nominate</Button> </div> : null }
  </Paper>
    </Grid>
  )
}

export default Results;