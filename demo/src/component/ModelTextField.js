import React from 'react';
import TextField from '@material-ui/core/TextField';


// Model-TextField-1-row
const ModelTextField = (props) => {
    return (
        <TextField
            label={props.labelTextField1}
            variant="outlined"
            color="filled"
        />
    )
}

export default ModelTextField;