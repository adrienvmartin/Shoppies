import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const Banner = ({ style, noms }) => {
  return (
    <Grid>
      <Paper className={style}>
        Congratulations! You've added {noms} nominations!
      </Paper>
    </Grid>
  )
}

export default Banner;
