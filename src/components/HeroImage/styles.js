import { makeStyles } from '@material-ui/core'

const backgroundImage = "https://images.unsplash.com/photo-1524350876685-274059332603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80"

export default makeStyles((theme) => ({
  section: {
    height: '90vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: 'white',
    position: 'relative',
  },
  container: {
    height: '100%'
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
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}))