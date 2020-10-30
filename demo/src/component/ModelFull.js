import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddSharpIcon from "@material-ui/icons/AddSharp";
import ModelTextField from './ModelTextField';
import ModelTextField2Item from './ModelTextField2Item';
import ModelTextField3Item from './ModelTextField3Item';
import ModelTextArea from './ModelTextArea';
import ModelRadioButton from './ModelRadioButton';
import GroupButton from './GroupButton';
import Divider from '@material-ui/core/Divider';
import NativeSelects from './NativeSelects';

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
    styleDivider: {
        width: '100%',
    },
}));

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
                                            <ModelTextField3Item
                                                labelTextField1={props.labelTextField1}
                                                labelTextField2={props.labelTextField2}
                                                labelTextField3={props.labelTextField3}
                                            />
                                        );
                                    case "2":
                                        return (
                                            <ModelTextField2Item
                                                labelTextField1={props.labelTextField1}
                                                labelTextField2={props.labelTextField2}
                                            />
                                        );
                                    case "1":
                                        return (
                                            <ModelTextField
                                                labelTextField1={props.labelTextField1}
                                            />
                                        );
                                    default:
                                        return (
                                            console.log('Page Khong can textField')
                                        );
                                }
                            })()}

                            {/* Check and Render ModelTextArea*/}
                            {
                                typeof props.placeholder === "string" && <ModelTextArea placeholder={props.placeholder} />
                            }

                            {/* Check and Render Button-Radio*/}
                            {
                                typeof props.title === "string" && 
                                <ModelRadioButton
                                title={props.title}
                                label1={props.label1}
                                label2={props.label2}
                                />
                            }

                            {/* Check and Render Native-Selects*/}
                            {
                                typeof props.select === "string" && <NativeSelects />
                            }
                            
                            <Divider className={classes.styleDivider} />
                            <GroupButton />
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default ModelFull;