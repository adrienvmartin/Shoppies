import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

const Nominations = ({ paperClass, buttonClass, nominations, clearNoms, removeNom }) => {
  return (
    <Grid item>
      <Paper className={paperClass}>
        <h4>Nominations</h4>
        <br />
        {nominations.length > 0 ? (<div><Button variant="contained" color="default" className={buttonClass} onClick={clearNoms}>Clear All</Button></div>) : null}
        {nominations.length > 0 ? nominations.map(n => {
          return (<div key={Math.random()}><br />• {n.title} {n.year} <Button className={buttonClass} variant="contained" color="default" onClick={() => removeNom(n.id)}>Remove</Button></div>)
        }) : null}
      </Paper>
    </Grid>
  );
}

export default Nominations;
