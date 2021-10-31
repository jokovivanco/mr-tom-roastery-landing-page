import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  section: {
    backgroundColor: 'transparent'
  },
  card: {
    textAlign: 'center'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  },
  image: {
    width: '100%',
    borderRadius: '2px'
  },
  direction: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  }
}))