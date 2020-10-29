import React from 'react';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// Model-RadioButton
const ModelRadioButton = (props) => {
    return (
        <FormControl component="fieldset">
            <Box
                display="flex"
                flexWrap="nowrap"
                bgcolor="background.paper"
            >
                <Box>
                    <FormLabel component="legend">{props.title}</FormLabel>
                </Box>
                <Box p={1}>
                    <RadioGroup aria-label="gender" name="gender1">
                        <Box
                            display="flex"
                            flexWrap="nowrap"
                            bgcolor="background.paper"
                        >
                            <Box p={1}>
                                <FormControlLabel value="1" control={<Radio />} label={props.label1} />
                            </Box>
                            <Box p={1}>
                                <FormControlLabel value="2" control={<Radio />} label={props.label2} />
                            </Box>
                        </Box>
                    </RadioGroup>
                </Box>
            </Box>
        </FormControl>
    )
}

export default ModelRadioButton;