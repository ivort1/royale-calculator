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
  const card = props.cardRarity;
  let cardLevelArray = [];

  if(card === 9586) { cardLevelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }

  if(card === 2586) { cardLevelArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }

  if(card === 386) { cardLevelArray = [6, 7, 8, 9, 10, 11, 12] }

  if(card === 36) { cardLevelArray = [9, 10, 11, 12] }


  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
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
              cardLevelArray.map(element => {
                  return <MenuItem value={element}>{element}</MenuItem>
              })
          }
        </Select>
      </FormControl>
    </div>
  );
}