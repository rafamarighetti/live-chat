import {makeStyles} from "@material-ui/core/styles";

const loginStyles = makeStyles({
  wrapper: {
    maxWidth: '350px',
    backgroundColor: '#FFF',
    borderRadius: '10px'
  },
  field: {
    margin: '0 0 20px 0',
  },
  h1:{
    fontSize: '24px',
    color: '#230e27',
    marginTop: '36px'
  },
  form: {
    width: '100%',
    textAlign: 'center',
    padding: '36px'
  },
  item: {
    width: '100%',
  },
  link: {
    '&:hover': {
      cursor: 'pointer',
      color: '#9c27b0',
    }
  }
});

export default loginStyles;
