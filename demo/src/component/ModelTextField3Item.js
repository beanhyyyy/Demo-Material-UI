import React from 'react';
import TextField from '@material-ui/core/TextField';


// Model-TextField-3-row
const ModelTextField3Item = (props) => {
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
            <TextField
                label={props.labelTextField3}
                variant="outlined"
                color="filled"
            />
        </>
    )
}

export default ModelTextField3Item;