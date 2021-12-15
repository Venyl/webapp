import { makeStyles } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    backgroundColor: 'transparent',
    marginTop: 65,
    marginInline: 'auto',
    width: 1004,
    minHeight: '70vh'
  },
  back: {
    height: 24,
    width: 'fit-content',
    transition: 'filter 300ms',

    '&:hover': {
      filter: 'brightness(2)'
    }
  },
  backIcon: {
    width: 22,
    height: 24,
    marginRight: 12
  },
  backText: {
    color: colors.invariant.lightInfoText,
    WebkitPaddingBefore: '2px',
    ...typography.body2
  },
  button: {
    color: colors.white.main,
    ...typography.body1,
    textTransform: 'none',
    background: colors.invariant.accent1,
    borderRadius: 5,
    height: 40,
    width: 168,

    '&:hover': {
      background: colors.invariant.accent1,
      boxShadow: `0 0 15px ${colors.invariant.accent1}`
    }
  },
  buttonText: {
    WebkitPaddingBefore: '2px'
  },
  top: {
    marginBottom: 16
  }
}))

export default useStyles