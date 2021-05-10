import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import Banner from './components/Banner';
import Results from './components/Results';
import Nominations from './components/Nominations';
import InfoModal from './components/Modal';

const useStyles = makeStyles(() => ({
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
  },
  banner: {
    padding: 20,
    margin: 10,
    backgroundColor: 'green',
    color: 'white'
  }
}));

const api = process.env.REACT_APP_API_KEY;

const App = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});
  const [nominations, setNom] = useState([]);
  const [nomButton, setNomButton] = useState(false);
  const [banner, setBanner] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData(api) {
      const res = await axios(`https://www.omdbapi.com/?apikey=${api}&t=${searchTerm}`);
      setData({
        title: res.data.Title,
        year: res.data.Year,
        plot: res.data.Plot,
        rating: res.data.imdbRating,
      })
    };
    fetchData(api);
  }, [setData, searchTerm]);

  useEffect(() => {
    if (nominations.length > 4) {
      setBanner(true);
    } else {
      setBanner(false);
    }
   
  }, [nominations, setBanner]);

  useEffect(() => {
    setNomButton(true);
  }, [setNom])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setNomButton(false);
  };

  const addNom = (title, year) => {
    const titles = [];
    nominations.forEach(n => titles.push(n.title));
    const already = titles.includes(title);
    if (!already) {
      setNom([
        ...nominations,
        {
          title,
          year,
        }
      ]);
      setNomButton(true);
    } else {
      
      setNomButton(true);
    }
  }

  const removeNom = (id) => {
    const index = nominations.findIndex(x => x.id === id);
    nominations.splice(index, 1);
    setNomButton(false);
    setNom([...nominations]);
  }

  const clearNoms = () => {
    setNomButton(false);
    setNom([]);
  }

  const getDetails = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  const setModal = (param) => {
    setOpen(param);
  }

  return (
    <div>
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
      {banner ? <Banner style={classes.banner} noms={nominations.length} /> : null}
          </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start">
      <Results
            paperClass={classes.paper}
            buttonClass={classes.button}
            searchTerm={searchTerm}
            data={data}
            id={data.id}
            title={data.title}
            year={data.year}
            nomButton={nomButton}
          addNom={addNom}
          getDetails={() => setModal(true)}
        />
        <InfoModal
          open={open}
          handleClose={() => setModal(false)}
          details={data}
          />
        <Nominations
          paperClass={classes.paper}
          buttonClass={classes.button}
          nominations={nominations}
          clearNoms={clearNoms}
          removeNom={removeNom}
        />
      </Grid>
    </div>
  );
}

export default App;
