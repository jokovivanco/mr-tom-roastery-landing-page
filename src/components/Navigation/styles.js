import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: 'white'
  },
  customToolbar: {
    padding: 0,
    fontWeight: 'lighter'
  },
  coloredNavbar: {
    backgroundColor: 'white',
    color: 'black'
  },
  fontInverted: {
    fontWeight: '400',
    color: 'black'
  }
}))