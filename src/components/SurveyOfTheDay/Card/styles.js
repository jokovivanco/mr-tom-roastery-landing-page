import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    minWidth: 200,
    paddingTop: '5px'
  },
  media: {
    width: 'auto',
    height: 300,
    position: 'relative',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    color: 'white',
    width: '88%',
    backgroundColor: 'black',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  },
  title: {
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}))