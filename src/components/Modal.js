import React from 'react';
import { Modal, Dialog, Paper, Fade, Grid, Button } from '@material-ui/core';

const InfoModal = ({ open, handleClose, details, paperClass }) => {
  return (
    <React.Fragment>
      <Dialog onClose={handleClose} open={open} onBackdropClick={handleClose}>
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
          Rated {details.rating}/10 on IMDB.
          <br />
          <br />
          {details.plot}
              </div>
              <br />
        <Button variant="contained" color="default" onClick={handleClose}>Close</Button>
            </Paper>
            </Grid>
          </Fade>
        </Modal>
        </Dialog>
    </React.Fragment>
  )
}

export default InfoModal;