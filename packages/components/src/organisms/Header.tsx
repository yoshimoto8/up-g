import * as React from 'react'
import { getLanguage as t } from '@up-g/assets'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '../atoms/Button'

type Props = {
  classes: any
}

const Heaer = ({ classes }: Props) => {
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button label={t('registorAccount')} color="inherit" />
          <Button label={t('login')} variant="contained" color="primary" />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

const styles = {
  appBar: {
    backgroundColor: '#222'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

export default withStyles(styles)(Heaer)
