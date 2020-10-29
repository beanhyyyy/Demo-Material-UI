import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import AddSharpIcon from "@material-ui/icons/AddSharp";

// ModelFormPhone
const ModelFormPhone = (props) => {
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

            <Box
                display="flex"
                flexWrap="nowrap"
                bgcolor="background.paper"
                p={2}
            >
                <Box ml="auto">
                    <TextField
                        label={props.labelAddPhone}
                        variant="outlined"
                        color="filled"
                    />
                </Box>
                <Box ml={3}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                    >
                        <AddSharpIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default ModelFormPhone;