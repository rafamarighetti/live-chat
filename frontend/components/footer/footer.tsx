import React from 'react';
import {Grid} from '@mui/material';
import footerStyles from './footer.style'

const Footer = () => {
  const classes = footerStyles()

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className={classes.main}
    >
      <p className={classes.copyright}>
        <a target='_blank' href="https://github.com/rafamarighetti/live-chat" rel="noreferrer">
          &copy; Live Chat
        </a>
      </p>
    </Grid>
  );
};

export default Footer;