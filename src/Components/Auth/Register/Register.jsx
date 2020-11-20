import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Actions/auth';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(register(userData));
          }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Name'
                type='text'
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Email Address'
                type='email'
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Password'
                type='password'
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/auth/login' variant='body2'>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;
