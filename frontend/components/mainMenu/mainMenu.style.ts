import { red } from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";

export const mainMenuStyles = makeStyles({
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '530px',
    border: '2px solid #9c27b0',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  close: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#9c27b0',
    '&:hover': {
      cursor: 'pointer',
      color: '#ba000d'
    }
  },
  qrcode:{
    color: 'red',
    border: 'red'
  },
  link: {
    border: '1px solid #9c27b0',
    borderRadius: '5px',
    height: '40px',
    color: '#9c27b0',
    '&:hover': {
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: '#9c27b0',
      boxShadow: '0px 5px 10px 2px rgba(114, 194, 255, 0.2) inset',
      transition: '.7s'
    }
  },
});

export default mainMenuStyles;
