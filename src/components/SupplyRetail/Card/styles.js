import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    [theme.breakpoints.down('xs')]: {

    }
  },
  media: {
    height: 200,
  },
  wrap: {
    whiteSpace: 'normal'
  }
}))