import { makeStyles } from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

export default makeStyles(() => ({
  section: {
    backgroundColor: 'transparent'
  },
  card: {
    textAlign: 'center'
  },
  paper: {
    paddingTop: '20px'
  },
  title: {
    color: deepOrange['A700']
  }
}))