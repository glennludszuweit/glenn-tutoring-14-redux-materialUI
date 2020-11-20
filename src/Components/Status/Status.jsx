import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function Status() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [auth]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {auth.status === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success'>
            {auth.req === 'login' ? (
              <div>Login successful!</div>
            ) : auth.req === 'register' ? (
              <div>Registered successfully!</div>
            ) : auth.req === 'logout' ? (
              <div>Logged out!</div>
            ) : null}
          </Alert>
        </Snackbar>
      ) : auth.status === false ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error'>
            {auth.req === 'login' ? (
              <div>Login failed! Please check credentials!</div>
            ) : auth.req === 'register' ? (
              <div>Registration failed! Please check email or password!</div>
            ) : null}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
}

export default Status;
