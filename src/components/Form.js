import React, { Fragemnt } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchForm = () => {
  return (
    <Fragment>
      <Paper>
        <TextField
          label="Search"
        />
      </Paper>
    </Fragment>
  )
}