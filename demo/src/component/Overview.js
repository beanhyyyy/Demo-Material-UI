import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Cake from '@material-ui/icons/Cake';
import Wc from '@material-ui/icons/Wc';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Box from '@material-ui/core/Box';
import EditIcon from "@material-ui/icons/Edit";
import Item from './Item';
import ItemRight from './ItemRight';

const options = [" Sửa ", "Xóa"];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  list2: {
    backgroundColor: theme.palette.background.paper,
  },
  list3: {
    backgroundColor: theme.palette.background.paper,
  },
  rightButtons: {
    float: 'right'
  },
}));

export default function Overview() {
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
      <Grid item sm={6} xs={12} >
        <Paper className={classes.paper}>
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
                >
                  <Box>
                    <Item key={i.id}  {...i} />
                  </Box>
                  <Box ml="auto">
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
      {/* col 3 */}
      <Grid item sm={3} xs={12} >
        <Paper className={classes.paper}>
          <List className={classes.list3}>
            {/* button right */}
            <div className={classes.rightButtons}>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
              >
                <EditIcon />
              </IconButton>
            </div>
            {/* Value */}
            {[
              {
                id: 0,
                icon: <PhoneIphone />,
                text: "1900 8198"
              },
              {
                id: 1,
                icon: <Cake />,
                text: "25 tháng 10, 1993"
              },
              {
                id: 2,
                icon: <Wc />,
                text: "Nam"
              }
            ].map(i => (
              <div>
                <Divider variant="inset" component="li" />
                <ItemRight key={i.id}  {...i} />
              </div>
            ))}
          </List>
        </Paper>
      </Grid>
    </>
  );
}
