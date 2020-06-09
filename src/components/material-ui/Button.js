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
                    disabled onClick={props.calculate}
                    style={{width: "40vh"}}>
                    Calculate
                </Button>
                <h1>{props.cardsNeeded}</h1>
            </div>
      );
  } else {
        return(
            <div className={classes.root}>
                <Button
                    style={{background: '#303030', color: '#fdfdfd', width: "40vh"}}
                    variant="contained"
                    onClick={props.calculate}>
                    Calculate
                </Button>
                <h1>{props.cardsNeeded}</h1>
            </div>
        );
  }
}