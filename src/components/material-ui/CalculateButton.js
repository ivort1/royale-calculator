import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  if ((props.cardRarity === '') || (props.cardLevel === '') || (props.amountOfCards === '')) {
      return(
            <div className={classes.root}>
                <Button
                    variant="contained"
                    disabled
                    style={{width: "40vh", fontFamily: 'Supercell-Magic'}}>
                    Calculate
                </Button>
            </div>
      );
  } else {
        return(
            <div className={classes.root}>
                <Button
                    style={{background: '#303030', color: '#fdfdfd', width: "40vh", fontFamily: 'Supercell-Magic'}}
                    variant="contained"
                    onClick={props.calculate}>
                    Calculate
                </Button>
            </div>
        );
  }
}