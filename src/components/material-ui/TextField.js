import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        variant="filled"
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange} 
        style={{width: "40vh"}}
        inputProps={{inputMode: "numeric"}} />
    </form>
  );
}