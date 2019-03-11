import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'

// 必要になったら随時追加
type Props = {
  label: string
  color?: 'inherit' | 'primary'
  variant?: 'contained'
  style?: any
}

const Button = ({ label, color, variant, style }: Props) => {
  return (
    <MaterialButton color={color} variant={variant} className={style}>
      {label}
    </MaterialButton>
  )
}

const styles = {}

export default withStyles(styles)(Button)
