import {makeStyles} from "@material-ui/core/styles";

const registrationStyles = makeStyles({
  wrapper: {
    maxWidth: '350px',
    backgroundColor: '#FFF',
    borderRadius: '10px'
  },
  form: {
    width: '100%',
    textAlign: 'center',
    padding: '36px'
  },
  h1:{
    fontSize: '24px',
    color: '#230e27',
    marginTop: '36px'
  },
  el: {
    width: '100%',
  },
  fileUpload: {
    display: 'flex',
    alignItems: 'baseline',
  },
  link: {
    '&:hover': {
      cursor: 'pointer',
      color: '#9c27b0',
    }
  }
});

export default registrationStyles;
