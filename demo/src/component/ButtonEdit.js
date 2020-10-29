import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  rightButtons: {
    float: 'right'
  },
}));

const ButtonEdit = () => {
    const classes = useStyles();
    return (
        <div className={classes.rightButtons}>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
              >
                <EditIcon />
              </IconButton>
            </div>
    )
}

export default ButtonEdit;
