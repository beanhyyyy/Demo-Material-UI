import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    section1: {
        padding: theme.spacing(1, 2),
    },
    list2: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const HeaderTitle = (props) => {
    const classes = useStyles();
    return(
    <div className={classes.section1}>
        <Grid container alignItems="center">
            <Grid item xs>
                <Typography gutterBottom variant="h6">
                    {props.title}
                </Typography>
            </Grid>
        </Grid>
    </div>
)}

export default HeaderTitle;
