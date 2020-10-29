import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
    styleTextArea: {
        width: '85%',
        fontSize: '1rem',
    },
}));

// Model-TextAre
const ModelTextArea = (props) => {
    const classes = useStyles();

    return (
        <TextareaAutosize
            className={classes.styleTextArea}
            rowsMin={7}
            rowsMax={10}
            placeholder={props.placeholder}
        />
    )
}

export default ModelTextArea;