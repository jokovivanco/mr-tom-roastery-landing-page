import { makeStyles } from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

export default makeStyles(() => ({
  section: {
    backgroundColor: 'transparent'
  },
  card: {
    textAlign: 'center'
  },
  grid: {
    padding: '0 50px'
  },
  paper: {
    padding: '10px 3px 0'
  },
  title: {
    color: deepOrange['A700']
  }
}))