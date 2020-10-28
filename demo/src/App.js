import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Overview from './component/Overview';
import SchoolEducation from './component/SchoolEducation';
import HeaderTitle from './component/HeaderTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  main: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1, 2),
  },
  section1: {
    padding: theme.spacing(2, 2),
  },
  section2: {
    padding: theme.spacing(2, 2),
  },
  list1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();

  // UI
  const [ui, setUI] = React.useState(0);

  // set UI
  const changeUi = (num) => {
    setUI(num)
  }

  const ItemMenu = (props) => {
    return (
      <ListItem button onClick={() => { changeUi(props.id) }}>
        <ListItemText primary={props.text} />
      </ListItem>
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        {/* Header */}
        <HeaderTitle title="Giới thiệu (version 3)" />
        <Divider />
        
        {/* Menu */}
        <div className={classes.section2}>
          <Grid container spacing={3}>
            <Grid item sm={3} xs={12}>
              <Paper className={classes.paper}>
                <List component="nav" className={classes.list1} aria-label="mailbox folders">
                  {/* Value */}
                  {[
                    {
                      id: 0,
                      text: "Tổng quan"
                    },
                    {
                      id: 1,
                      text: "Công việc và học vấn"
                    },
                    {
                      id: 2,
                      text: "Nơi từng sống"
                    },
                    {
                      id: 3,
                      text: "Thông tin liên hệ và cơ bản"
                    },
                    {
                      id: 4,
                      text: "Gia đình và các mối quan hệ"
                    },
                    {
                      id: 5,
                      text: "Chi tiết về bạn"
                    },
                    {
                      id: 6,
                      text: "Sự kiện trong đời"
                    },
                  ].map(i => (
                    <div>
                      <Divider />
                      <ItemMenu key={i.id}  {...i} changeUI={changeUi} />
                    </div>
                  ))}
                </List>
              </Paper>
            </Grid>
            {/* Body */}
            {ui === 0 && <Overview />}
            {ui === 1 && <SchoolEducation />}
          </Grid>
        </div>
      </div>
    </div>
  );
}
