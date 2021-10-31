import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1511759066510-46958c3fffa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80")',
    backgroundPosition: '100% center',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '0% center'
    },
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  grid: {
    width: '100%'
  },
  direction: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  button: {
    margin: `${theme.spacing(1)} ${theme.spacing(1)} 0`,
  }
}))