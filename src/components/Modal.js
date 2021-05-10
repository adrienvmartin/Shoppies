import React from 'react';
import { Modal, Paper, Fade } from '@material-ui/core';

const InfoModal = ({ open, handleClose, details }) => {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <Paper>
        <div>
          <h1>{details.title}</h1>
          <br />
          Rated {details.rating} on IMDB.
          <br />
          Plot: {details.plot}
            </div>
            </Paper>
          </Fade>
        </Modal>
    </React.Fragment>
  )
}

export default InfoModal;