import {makeStyles} from "@material-ui/core/styles";

export const roomInfoStyles = makeStyles({
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
  },
  select: {
    margin: '5px 5px',
    border: '1px solid #9c27b0',
    borderRadius: '5px',
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  checkedUsers: {
    borderBottom: '1px solid #9c27b0',
    height: '70px',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    padding: '10px',
    alignItems: 'center',
  },
  userList: {
    height: '200px',
    overflowX: 'auto'
  },
  userCard: {
    height: '60px',
    border: '1px solid #9c27b0',
    borderRadius: '5px',
  },
  addUser: {
    color: '#9c27b0',
    '&:hover': {
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: '#9c27b0',
      borderRadius: '50%'
    }
  }
});

export default roomInfoStyles;
