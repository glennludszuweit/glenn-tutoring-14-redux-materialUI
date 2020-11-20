import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
    '& a:hover': {
      color: '#f4f4f4',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
