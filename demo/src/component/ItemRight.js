import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ItemRight = (props) => {
    return (
        <ListItem >
            <ListItemAvatar>
                <Avatar>
                    {props.icon}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary={props.secondText} />
        </ListItem>
    )
}

export default ItemRight;