import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  section: {
    height: '90vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: 'white',
    position: 'relative',
  },
  container: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-100px'
    }
  },
  content: {
    height: '100%',
    zIndex: 99,
    position: 'relative'
  },
  toolbar: theme.mixins.toolbar,
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  logo: {
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '70px'
    }
  },
  goldenLogo: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '50%'
    }
  }
}))