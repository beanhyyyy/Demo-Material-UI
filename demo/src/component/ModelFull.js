import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddSharpIcon from "@material-ui/icons/AddSharp";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '60%',
    },
    rightButtons: {
        textAlign: 'right'
    },
    form: {
        textAlign: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: '85%',
        },
    },
    styleTextArea: {
        width: '85%',
        fontSize: '1rem',
    },
}));

// Model-TextField-1-row
const ModelTextFiled = (props) => {
    return (
        <TextField
            label={props.labelTextField1}
            variant="outlined"
            color="filled"
        />
    )
}

// Model-TextField-2-row
const ModelTextFiled2Item = (props) => {
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

// Model-TextField-3-row
const ModelTextFiled3Item = (props) => {
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

// Model-Full
const ModelFull = (props) => {
    const classes = useStyles();
    //Button modal
    const [openModal, setOpen] = React.useState(null);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(null);
    };

    //Data-Picker
   
    return (
        <div>
            <div className={classes.rightButtons} onClick={handleOpenModal}>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                >
                    <AddSharpIcon />
                </IconButton>
            </div>
            <Modal
                className={classes.modal}
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.paperModal}>
                        <form className={classes.form} noValidate autoComplete="off">
                            {/* Check and Render */}
                            {(() => {
                                switch (props.numberCheck) {
                                    case "3":
                                        return (
                                            <ModelTextFiled3Item
                                                labelTextField1={props.labelTextField1}
                                                labelTextField2={props.labelTextField2}
                                                labelTextField3={props.labelTextField3}
                                            />
                                        );
                                    case "2":
                                        return (
                                            <ModelTextFiled2Item
                                                labelTextField1={props.labelTextField1}
                                                labelTextField2={props.labelTextField2}
                                            />
                                        );
                                    case "1":
                                        return (
                                            <ModelTextFiled
                                                labelTextField1={props.labelTextField1}
                                            />
                                        );
                                    default:
                                        return (
                                            <ModelTextFiled3Item
                                                labelTextField1={props.labelTextField1}
                                                labelTextField2={props.labelTextField2}
                                                labelTextField3={props.labelTextField3}
                                            />
                                        );
                                }
                            })()}
                            <ModelTextArea
                                placeholder={props.placeholder}
                            />
                            {/* Button-Radio */}
                            <ModelRadioButton
                                title={props.title}
                                label1={props.label1}
                                label2={props.label2}
                            />
                            {/* Date-Picker */}
                            
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default ModelFull;