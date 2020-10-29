import React from 'react';
import TextField from '@material-ui/core/TextField';


// Model-TextField-2-row
const ModelTextField2Item = (props) => {
    return (
        <>
            <TextField
                label={props.labelTextField1}
                variant="outlined"
                color="filled"
            />
            <TextField
                label={props.labelTextField2}
                variant="outlined"
                color="filled"
            />
        </>
    )
}

export default ModelTextField2Item;