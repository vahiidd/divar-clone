import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import { Accordion, AccordionDetails, AccordionSummary } from './accordin';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@material-ui/core';


const drawerWidth = 290;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      marginTop: 64,
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    listItem: {
      textAlign: 'right',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
      minWidth: 180,
      marginTop: -40,
    },
    category: {
      padding: '20px 15px 0',
      fontFamily: 'Vazir',
    },
    listItemText: {
      fontSize: '14px',
      fontFamily: 'Vazir',
      color: '#5b5b5b',
    },
  })
);

export default function VerticalNavbar() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const categories = [
    { name: 'املاک', icon: () => <HomeWorkOutlinedIcon fontSize='small' /> },
    {
      name: 'وسایل نقلیه',
      icon: () => <DriveEtaOutlinedIcon fontSize='small' />,
    },
    {
      name: 'لوازم الکترونیکی',
      icon: () => <PhoneIphoneOutlinedIcon fontSize='small' />,
    },
    { name: 'مربوط به خانه', icon: () => null },
    { name: 'خدمات', icon: () => null },
    {
      name: 'وسایل شخصی',
      icon: () => <WatchOutlinedIcon fontSize='small' />,
    },
    {
      name: 'سرگرمی و فراغت',
      icon: () => <CasinoOutlinedIcon fontSize='small' />,
    },
    {
      name: 'اجتماعی',
      icon: () => <PeopleAltOutlinedIcon fontSize='small' />,
    },
    {
      name: 'برای کسب و کار',
      icon: () => <EventSeatOutlinedIcon fontSize='small' />,
    },
    {
      name: 'استخدام و کاریابی',
      icon: () => <BusinessCenterOutlinedIcon fontSize='small' />,
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
      >
        <Divider />
        <List>
          <Typography className={classes.category}>دسته بندی ها</Typography>
          {categories.map((category, index) => (
            <ListItem button key={category.name} className={classes.listItem}>
              <ListItemIcon>{category.icon()}</ListItemIcon>
              <ListItemText
                style={{ marginRight: '-30px' }}
                classes={{ primary: classes.listItemText }}
                primary={category.name}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <FormControlLabel
          control={
            <Switch checked={checked} onChange={handleChange} name='checkedA' />
          }
          label='فقط آگهی های فروش'
          labelPlacement='start'
        />
        <Divider />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>محل</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={age}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setAge(event.target.value as string);
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>قیمت</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={age}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setAge(event.target.value as string);
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          dolorem sequi sed nisi quasi. Ratione facere, numquam itaque dolorum
          provident incidunt! Blanditiis ea repellendus nam explicabo. Expedita
          aliquid doloremque facilis.
        </Typography>
      </Drawer>
    </div>
  );
}
