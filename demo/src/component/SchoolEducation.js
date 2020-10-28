import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Box from '@material-ui/core/Box';
import PublicIcon from '@material-ui/icons/Public';
import ModelFull from './ModelFull';
import HeaderTitle from './HeaderTitle';
import Item from './Item';

const options = [" Sửa ", "Xóa"];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
    section1: {
        padding: theme.spacing(1, 2),
    },
    list2: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SchoolEducation() {
    const classes = useStyles();

    // button More
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {/* col 2 */}
            <Grid item sm={9} xs={12} >
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Công việc" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        numberCheck="3"
                        labelTextField1="Công ty"
                        labelTextField2="Chức vụ"
                        labelTextField3="Thành phố / Tỉnh"
                        placeholder=" Mô tả công việc"
                        title="Khoảng thời gian"
                        label1="Tôi hiện đang làm việc tại đây"
                        label2="Tôi đã làm việc tại đây"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Làm Dev tại Hahalolo và Làm biếng ở Nhà1",
                                secondText: "Quá khứ: Halotimes và Teen1s"
                            },
                            {
                                id: 1,
                                icon: <WorkIcon />,
                                text: "Làm Dev tại Hahalolo và Làm biếng ở Nhà2",
                                secondText: "Quá khứ: Halotimes và Teen1s"
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
                                        <IconButton
                                            aria-label="more"
                                            aria-haspopup="true"
                                        >
                                            <PublicIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: "10ch"
                                                }
                                            }}
                                        >
                                            {options.map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={option === "Pyxis"}
                                                    onClick={handleClose}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                </Box>
                            </div>
                        ))}
                    </List>
                </Paper>
                {/* Paper-2 */}
                <Paper className={classes.paper}>
                    {/* Header */}
                    <HeaderTitle title="Học vấn" />
                    <Divider />
                    {/* Modal */}
                    <ModelFull
                        numberCheck="2"
                        labelTextField1="Trường học"
                        labelTextField2="Thành phố / Tỉnh"
                        placeholder=" Mô tả công việc"
                        title="Khoảng thời gian"
                        label1="Đã tốt nghiệp"
                        label2="Đang học"
                    />
                    {/* Content */}
                    <List className={classes.list2}>
                        {[
                            {
                                id: 0,
                                icon: <ImageIcon />,
                                text: "Làm Dev tại Hahalolo và Làm biếng ở Nhà1",
                                secondText: "Quá khứ: Halotimes và Teen1s"
                            },
                            {
                                id: 1,
                                icon: <WorkIcon />,
                                text: "Làm Dev tại Hahalolo và Làm biếng ở Nhà2",
                                secondText: "Quá khứ: Halotimes và Teen1s"
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
                                        <IconButton
                                            aria-label="more"
                                            aria-haspopup="true"
                                        >
                                            <PublicIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: "10ch"
                                                }
                                            }}
                                        >
                                            {options.map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={option === "Pyxis"}
                                                    onClick={handleClose}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
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
