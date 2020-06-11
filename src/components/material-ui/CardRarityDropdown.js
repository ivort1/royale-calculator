import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const cardRarityObject = [
    { key: 1, text: 'Common', value: 9586 },
    { key: 2, text: 'Rare', value: 2586 },
    { key: 3, text: 'Epic', value: 386 },
    { key: 4, text: 'Legendary', value: 36 }
  ]   
 
  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label" style={{fontFamily: "Supercell-Magic"}}>{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          style={{width: "40vh"}}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
              cardRarityObject.map(element => {
                  return <MenuItem key={element.key} value={element.value}>{element.text}</MenuItem>
              })
          }
        </Select>
      </FormControl>
    </div>
  );
}