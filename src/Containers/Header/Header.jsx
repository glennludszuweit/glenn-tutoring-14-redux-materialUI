import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Link to='/'>
              <HomeIcon fontSize='large' />
            </Link>
          </IconButton>
          <Typography variant='h6' className={classes.title}></Typography>

          {auth.token ? (
            <Button
              color='inherit'
              onClick={() => dispatch(logout(auth.refreshToken))}
            >
              Logout
            </Button>
          ) : (
            <Button color='inherit'>
              <Link to='/auth'>Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
