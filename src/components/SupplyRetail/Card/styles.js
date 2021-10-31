import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    display: 'inline-block',
    marginRight: theme.spacing(3)
  },
  media: {
    height: 200,
  },
  wrap: {
    whiteSpace: 'normal'
  }
}))