import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Box from '@material-ui/core/Box';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';

const options = [" Sửa ", "Xóa"];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
    section1: {
        padding: theme.spacing(2, 2),
    },
    list2: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SchoolEducation() {
    const classes = useStyles();

    const Item = (props) => (
        <ListItem >
          <ListItemAvatar>
            <Avatar>
              {props.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary={props.secondText} />
        </ListItem>
    )
    
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
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        <Typography gutterBottom variant="h6">
                            Công việc
                        </Typography>
                        </Grid>
                    </Grid>
                </div>
                <List className={classes.list2}>
                    {/* Value */}
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
                    },
                    {
                        id: 2,
                        icon: <BeachAccessIcon />,
                        text: "Làm Dev tại Hahalolo và Làm biếng ở Nhà3",
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
                        // css={{ maxWidth: 300 }}
                        >
                        <Box>
                            <Item key={i.id}  {...i} />
                        </Box>
                        <Box ml="auto">
                            {/* icon-world */}
                            <IconButton
                            aria-label="more"
                            aria-haspopup="true"
                            >
                            <PublicIcon />

                            {/* icon-more */}
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
