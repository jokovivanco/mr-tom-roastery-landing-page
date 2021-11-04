import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  section: {
    backgroundColor: '#f0f0f0'
  },
  card: {
    textAlign: 'center'
  },
  grid: {
    padding: '0 15px'
  },
  paper: {
    padding: '20px 3px'
  },
  toolbar: theme.mixins.toolbar
}))