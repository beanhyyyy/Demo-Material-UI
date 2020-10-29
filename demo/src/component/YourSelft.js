import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
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

export default function YourSelft() {
    const classes = useStyles();

    return (
        <>
            {/* col 2 */}
            <Grid item sm={9} xs={12} >
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Giới thiệu về bản thân" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        placeholder=" Giới thiệu về bản thân"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Đơn giản, dễ tính, vui vẻ, chân thành và nhiệt tình",
                            },
                            {
                                id: 1,
                                icon: <WorkIcon />,
                                text: "Đơn giản, dễ tính, vui vẻ, chân thành và nhiệt tình",
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
                    <HeaderTitle title="Các tên khác" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        numberCheck="1"
                        labelTextField1="Biệt danh của bạn"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "UI",
                                secondText: "Biệt danh"
                            },
                            {
                                id: 1,
                                icon: <WorkIcon />,
                                text: "Tiến Sĩ Hóa",
                                secondText: "Khác"
                            },
                            {
                                id: 2,
                                icon: <WorkIcon />,
                                text: "コナン",
                                secondText: "Tên khai sinh"
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
                {/* Paper-3 */}
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Trích dẫn yêu thích" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        placeholder=" Giới thiệu về bản thân"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: " 1. Yêu Tổ Quốc, yêu đồng bào."
                            },
                            {
                                id: 1,
                                icon: <ImageIcon />,
                                text: " 2. Học tập tốt, lao động tốt."
                            },
                            {
                                id: 2,
                                icon: <ImageIcon />,
                                text: " 3. Đoàn kết tốt, kỷ luật tốt."
                            },
                            {
                                id: 3,
                                icon: <ImageIcon />,
                                text: " 4. Giữ gìn vệ sinh thật tốt."
                            },
                            {
                                id: 4,
                                icon: <ImageIcon />,
                                text: " 5. Khiêm tốn, thật thà, dũng cảm."
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
