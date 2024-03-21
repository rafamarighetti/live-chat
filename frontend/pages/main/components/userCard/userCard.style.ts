import {makeStyles} from "@material-ui/core/styles";

const userCardStyles = makeStyles({
  block: {
    height: '60px',
    border: '1px solid #9c27b0',
    borderRadius: '5px',
    textAlign: 'left',
    marginBottom: '20px',
    color: '#000',
    overflow: 'hidden',
    // wordWrap: 'break-word',
    backgroundColor: '#fff',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#9c27b0',
        transition: '.7s',
        cursor: 'pointer',
      }
  },
  avatar: {
    width: '60px',
  },
  name: {
    paddingLeft: '10px',
  },
});

export default userCardStyles;
