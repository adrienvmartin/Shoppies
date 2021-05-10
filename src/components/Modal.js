import React from 'react';
import { Modal, Paper, Fade, Grid } from '@material-ui/core';

const InfoModal = ({ open, handleClose, details, paperClass }) => {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <Grid container fluid justify="center" alignItems="center">
          <Paper className={paperClass}>
        <div>
          <h1>{details.title}</h1>
          <br />
          Rated {details.rating} on IMDB.
          <br />
          Plot: {details.plot}
            </div>
            </Paper>
            </Grid>
          </Fade>
        </Modal>
    </React.Fragment>
  )
}

export default InfoModal;