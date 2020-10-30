import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import HttpIcon from '@material-ui/icons/Http';
import CakeIcon from '@material-ui/icons/Cake';
import WcIcon from '@material-ui/icons/Wc';
import Box from '@material-ui/core/Box';
import Item from '../Item';
import HeaderTitle from '../HeaderTitle';
import ButtonMore from '../ButtonMore';


const useStyles = makeStyles((theme) => ({
  list2: {
    backgroundColor: theme.palette.background.paper,
  },
  list3: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      {/* col 2 */}
      <Grid item sm={9} xs={12} >
        <Paper className={classes.paper}>
            <HeaderTitle title="Thông tin liên hệ" />   
            <Divider />

            <List className={classes.list2}>
            {/* Value */}
            {[
              {
                id: 0,
                icon: <CallIcon />,
                text: "Di động",
                secondText: "0321367834",
                threeText: "0565723484"
              },
              {
                id: 1,
                icon: <HomeIcon />,
                text: "Địa chỉ",
                secondText: "Ho Chi Minh City, Vietnam"
              },
              {
                id: 2,
                icon: <EmailIcon />,
                text: "Email",
                secondText: "abc@gmail.com",
                threeText: "def@yahoo.com"
              },
              {
                id: 3,
                icon: <HttpIcon />,
                text: "Hahalolo URL",
                secondText: "https://hahalolo.com/tienle"
              },
              {
                id: 4,
                icon: <HttpIcon />,
                text: "Các trang web và liên kết xã hội",
                secondText: "https://hahalolo.com/tienle"
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
                    <ButtonMore numberCheck="2"/>
                  </Box>
                </Box>
              </div>
            ))}
            </List>

            {/* Content-2 */}
            <HeaderTitle title="Thông tin cơ bản" />   
            <Divider />
            <List className={classes.list2}>
            {/* Value */}
            {[
              {
                id: 0,
                icon: <CakeIcon />,
                text: "Ngày sinh",
                secondText: "25/10/1993"
              },
              {
                id: 1,
                icon: <WcIcon />,
                text: "Giới tính",
                secondText: "Nam"
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
