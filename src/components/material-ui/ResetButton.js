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

    return(
        <div className={classes.root}>
            <Button
                style={{
                  background: "#3F51B5",
                  color: "#fdfdfd",
                  width: "40vh",
                  fontFamily: 'Supercell-Magic',
                  marginTop: "2vh"
                }}
                variant="contained"
                onClick={props.onClick}>
                Reset
            </Button>
        </div>
    );
}