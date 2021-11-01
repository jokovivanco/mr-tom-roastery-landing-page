import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  section: {
    backgroundColor: 'white'
  },
  card: {
    textAlign: 'center'
  },
  imageContainerLong: {
    position: 'relative',
    width: '100%',
    paddingTop: '150%',
    overflow: 'hidden'
  },
  imageContainerShort: {
    position: 'relative',
    width: '100%',
    paddingTop: '75%',
    overflow: 'hidden'
  },
  imageShort: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 250
  },
  imageLong: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 350
  }
}))