import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    inline: {
      display: 'inline',
    },
  }));

const Item = (props) => {
    const classes = useStyles();
    return (
        <ListItem >
            <ListItemAvatar>
                <Avatar>
                    {props.icon}
                </Avatar>
            </ListItemAvatar>
            {(() => {
                if(props.threeText) {
                    return (
                        <ListItemText primary={props.text}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {props.secondText}
                            </Typography>
                                {" "}-{" "}{props.threeText}
                            </React.Fragment>
                        }
                        />
                    );
                } else {
                    return (
                        <ListItemText primary={props.text}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {props.secondText}
                            </Typography>
                                {props.threeText}
                            </React.Fragment>
                        }
                        />
                    );
                }
            })()}
        </ListItem>
    )
}

export default Item;