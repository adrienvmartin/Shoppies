import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { key } from './api';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightgrey'
  },
  textField: {
    width: '50ch',
    margin: 8,
  },
  paper: {
    padding: 20,
    margin: 10
  },
  button: {
    margin: 10,
  }
}));

const App = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});
  const [nominations, setNom] = useState([]);

  useEffect(() => {
    async function fetchData(key) {
      const res = await axios(`http://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`);
      setData({
        title: res.data.Title,
        year: res.data.Year,
        id: res.data.imdbID,
      })
    };
    fetchData(key);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNom = () => {
    setNom([
      ...nominations,
      {
        title: data.title,
        year: data.year,
      }
    ]);
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
          <h1>The Shoppies</h1>
        <Paper className={classes.paper}>
          <Grid item>
            <TextField
              placeholder="Movie Title"
              className={classes.textField}
              onChange={handleChange}
            />
          </Grid>
        </Paper>
          </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
          <Paper
            className={classes.paper}
          >
            <h4>Results for "{searchTerm}":</h4>
            <br />
            {data.title ? <div>• {data.title} ({data.year})<Button className={classes.button} variant="contained" color="default" onClick={handleNom}>Nominate</Button> </div> : null }
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <h4>Nominations</h4>
            <br />
            {nominations.length > 0 ? nominations.map(n => { return (<div key={Math.random()}><br />• {n.title} {n.year}</div>)}) : null}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
