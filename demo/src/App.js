import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Cake from '@material-ui/icons/Cake';
import Wc from '@material-ui/icons/Wc';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10, 0),
  },
  main: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1, 2),
  },
  section1: {
    padding: theme.spacing(2, 2),
  },
  paper: {

  },
  list1: {
    backgroundColor: theme.palette.background.paper,
  },
  list2: {
    backgroundColor: theme.palette.background.paper,
  },
  list3: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {/* Header */}
      <Grid className={classes.main}>
        <Grid className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                Giới thiệu (version 2)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        {/* Body */}
        <Grid className={classes.section1}>
          <Grid container alignItems="center">
            {/* 3 col */}
            <Grid container spacing={3}>
              {/* col 1 */}
              <Grid item  sm={3} xs={12}>
                <Paper className={classes.paper}>
                  <List component="nav" className={classes.list1} aria-label="mailbox folders">
                    <ListItem button>
                      <ListItemText primary="Tổng quan" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary="Công việc và học vấn" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Nơi từng sống" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Thông tin liên hệ và cơ bản" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Gia đình và các mối quan hệ" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Chi tiết về bạn" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Sự kiện trong đời" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              {/* col 2 */}
              <Grid item sm={6} xs={12} >
                <Paper className={classes.paper}>
                  <List className={classes.list2}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Làm Dev tại Hahalolo và Làm biếng ở Nhà" secondary="Quá khứ: Halotimes và Teen1s" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Làm Dev tại Hahalolo và Làm biếng ở Nhà" secondary="Quá khứ: Halotimes và Teen1s" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Làm Dev tại Hahalolo và Làm biếng ở Nhà" secondary="July 20, 2014Quá khứ: Halotimes và Teen1s" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              {/* col 3 */}
              <Grid item sm={3} xs={12} >
                <Paper className={classes.paper}>
                  <List className={classes.list3}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneIphone />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="1900 8198"/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Cake />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="25 tháng 10, 1993"/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Wc />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Nam"/>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
