import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ImageIcon from '@material-ui/icons/Image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import ModelFull from '../ModelFull';
import HeaderTitle from '../HeaderTitle';
import Item from '../Item';
import ButtonMore from '../ButtonMore';

const useStyles = makeStyles((theme) => ({
    section1: {
        padding: theme.spacing(1, 2),
    },
    list2: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FamilyRelationship() {
    const classes = useStyles();

    return (
        <>
            {/* col 2 */}
            <Grid item sm={9} xs={12} >
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Tình trạng mối quan hệ" />
                    <Divider />
                   
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <FavoriteIcon />,
                                text: "Độc thân"
                            }
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
                {/* Paper-2 */}
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Thành viên trong gia đình" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        numberCheck="1"
                        labelTextField1="Tên thành viên trong gia đình"
                        select="s"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Cô gái của tôi",
                                secondText: "Vợ"
                            },
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Xuyến Lê",
                                secondText: "Em gái"
                            },
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Nga Tran",
                                secondText: "Con trai"
                            }
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
                                        <ButtonMore numberCheck="2"/>
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
