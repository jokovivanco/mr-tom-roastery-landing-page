import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none'
  },
  customToolbar: {
    padding: 0,
    fontWeight: 'lighter'
  },
  coloredNavbar: {
    backgroundColor: 'white',
    color: 'black',
    textDecoration: 'none'
  },
  fontInverted: {
    fontWeight: '400',
    color: 'black',
    textDecoration: 'none'
  },
  transition: {
    transitionTimingFunction: 'ease-in',
    transition: '0.5s'
  },
  grid: {
    width: 'auto'
  },
  gridItem: {
    textDecoration: 'none'
  },
  active: {
    borderBottom: '1px solid #000',
    borderRadius: 0,
    borderBottomColor: theme.palette.primary.main
  }
}))