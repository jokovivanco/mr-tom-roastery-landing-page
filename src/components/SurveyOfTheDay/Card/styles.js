import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  paper: {
    padding: '15px'
  },
  card: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    width: '100%',
    borderRadius: '3px',
  },
  caption: {
    position: 'absolute',
    bottom: 55,
    color: 'white'
  },
  button: {
    position: 'absolute',
    bottom: 15,
    width: 'calc(100% - 30px)'
  }
}))