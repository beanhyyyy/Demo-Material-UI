import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Box from '@material-ui/core/Box';
import ModelFull from './ModelFull';
import HeaderTitle from './HeaderTitle';
import Item from './Item';
import ButtonMore from './ButtonMore';

const useStyles = makeStyles((theme) => ({
    section1: {
        padding: theme.spacing(1, 2),
    },
    list2: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function EventOfMe() {
    const classes = useStyles();

    return (
        <>
            {/* col 2 */}
            <Grid item sm={9} xs={12} >
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Sự kiện trong đời" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        numberCheck="1"
                        labelTextField1="Sự kiện"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <BeenhereIcon />,
                                text: "Bắt đầu công việc mới tại Mạng xã hội du lịch Việt Nam",
                                secondary: "2016"
                            },
                            {
                                id: 1,
                                icon: <BeenhereIcon />,
                                text: "Tốt nghiệp Đại học Khoa học Huế",
                                secondary: "2016"
                            },
                            {
                                id: 2,
                                icon: <BeenhereIcon />,
                                text: "Con nít, người lớn",
                                secondary: "2012"
                            },
                            {
                                id: 3,
                                icon: <BeenhereIcon />,
                                text: "Tốt nghiệp Đại học Khoa học Huế",
                                secondary: "2011"
                            },
                        ].map(i => (
                            <div>
                                <Divider variant="inset" component="li" />
                                <Box
                                    display="flex"
                                    flexWrap="nowrap"
                                    p={1}
                                    m={1}
                                    bgcolor="background.paper"
                                >
                                    <Box>
                                        <Item key={i.id}  {...i} />
                                    </Box>
                                    {/* Content-Icon */}
                                    <Box ml="auto">
                                        <ButtonMore numberCheck="1"/>
                                    </Box>
                                </Box>
                            </div>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </>
    );
}
