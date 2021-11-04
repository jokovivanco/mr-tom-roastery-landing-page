import { makeStyles } from '@material-ui/core'

import { pattern2 } from '../../images'

export default makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${pattern2})`,
    backgroundPosition: '-10% center',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box',
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '100%',
      backgroundPosition: '-50% 80%'
    },
  },
  subtitle: {
    textAlign: 'center'
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
  },
  toolbar: theme.mixins.toolbar
}))