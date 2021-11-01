import { makeStyles } from '@material-ui/core'

import { pattern1 } from './images'

export default makeStyles((theme) => ({
  pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: `url(${pattern1})`,
    backgroundSize: '18%',
    backgroundPosition: '98% 22%',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '98% 22.35%',
      backgroundSize: '25%'
    },
  },
  pattern2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: `url(${pattern1})`,
    backgroundSize: '18%',
    backgroundPosition: '2% 74%',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '2% 66.24%',
      backgroundSize: '25%'
    }
  },

}))