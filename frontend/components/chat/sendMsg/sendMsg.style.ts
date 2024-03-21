import {makeStyles} from "@material-ui/core/styles";

const sendMsgStyles = makeStyles({
  main: {
    height: '775px',
    width: 'auto',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    paddingBottom: '36px',
    maxWidh: '360px'
  },
  h2: {
    textAlign: 'center',
    margin: '0px 0px',
    paddingTop: '30px',
  },
  form: {
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: '300px',
    margin: '30px auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '50px',
  },
  back: {
    width: '25%',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '5px',
    color: '#9c27b0',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #9c27b0',
        borderRadius: '20px',
      }
  },
  name: {
    width: '70%',
    textAlign: 'right',
    color: '#9c27b0',
  },
  avatar: {
    padding: '0',
    width: '0px',
    height: '40px',
    borderRadius: '50%',
    "&:hover": {
      backgroundColor: '#fff',
    },
    "&:active": {
      backgroundColor: '#fff'
    },
  },
  info: {
    marginTop: '10px',
    padding: '10px',
    textAlign: 'left'
  },
  infoName: {
    color: '#9c27b0',
    paddingBottom: '5px',
    borderBottom: '1px solid #9c27b0'
  },
  infoOther: {
    marginTop: '5px',
  },
  messages: {
    width: '300px',
    height: '500px',
    display: 'flex',
    overflowY: 'auto',
  },
  input: {
    margin: '0 auto',
    width: '300px',
    height: '200px',
  },
  empty: {
    color: '#9c27b0',
    margin: '20px auto',
    textAlign: 'center'
  }
});

export default sendMsgStyles;
