import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from './accordion';
import categories from './categories';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import enamadLogo from './images/enamad.jpg';
import majaziLogo from './images/majazi.png';
import samandehiLogo from './images/samandehi.jpg';
import { Link } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@material-ui/core';
import { DivarContext, SwitchNames } from '../../context/DivarProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      top: '-50vh',
      marginTop: '4rem',
      display: 'flex',
    },
    drawer: {
      width: '90%',
      paddingRight: 8,
      flexShrink: 0,
    },
    drawerPaper: {
      width: '100%',
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
      fontFamily: 'Vazir',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    formControl: {
      width: '100%',
      marginTop: -20,
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
    formControlLabel: {
      width: '100%',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'space-around',
    },
    formControlLabelText: {
      width: '130px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#4c4c4c',
    },
    inputLabel: {
      fontFamily: 'Vazir',
    },
    navbarFooter: {
      listStyle: 'none',
      color: 'gray',
      fontFamily: 'Vazir',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: '80%',
      height: '10vh',
      marginBottom: '20px',
      paddingRight: 5,
      '& li': {
        paddingLeft: '5px',
      },
      '& li:hover': {
        color: 'black',
        cursor: 'pointer',
      },
    },
  })
);

export default function VerticalNavbar() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const {
    apiData,
    city,
    setCategory,
    setNavbarSwitch,
    navbarSwitch,
  } = useContext(DivarContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarSwitch((pre) => ({
      ...pre,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Divider />
        <List>
          <Typography className={classes.category}>دسته بندی ها</Typography>
          {categories.map((category, index) => (
            <Link
              style={{ textDecorationLine: 'none' }}
              to={`/${city}/${category.value}`}
              onClick={() => {
                setCategory(category.value);
              }}
            >
              <ListItem button key={category.name} className={classes.listItem}>
                <ListItemIcon>{category.icon()}</ListItemIcon>
                <ListItemText
                  style={{ marginRight: '-30px' }}
                  classes={{ primary: classes.listItemText }}
                  primary={category.name}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <FormControlLabel
          control={
            <Switch
              checked={navbarSwitch[SwitchNames.STORE]}
              onChange={handleChange}
              name={SwitchNames.STORE}
            />
          }
          classes={{ label: classes.formControlLabelText }}
          className={classes.formControlLabel}
          label='فقط آگهی های فروشگاه'
          labelPlacement='start'
        />

        {'schema' in apiData &&
        'districts' in apiData.schema.json_schema.properties ? (
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
                <InputLabel className={classes.inputLabel}>
                  همه محله ها
                </InputLabel>
                <Select
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setAge(event.target.value as string);
                  }}
                >
                  {apiData.schema.json_schema.properties.districts.properties.vacancies.items.enumNames.map(
                    (name) => (
                      <MenuItem>{name}</MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ) : null}
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
              <InputLabel className={classes.inputLabel}>Age</InputLabel>
              <Select
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
        <FormControlLabel
          control={
            <Switch
              checked={navbarSwitch[SwitchNames.PHOTO]}
              onChange={handleChange}
              name={SwitchNames.PHOTO}
            />
          }
          className={classes.formControlLabel}
          classes={{ label: classes.formControlLabelText }}
          label='فقط عکس دار'
          labelPlacement='start'
        />
        <Divider />
        <FormControlLabel
          control={
            <Switch
              checked={navbarSwitch[SwitchNames.URGENT]}
              onChange={handleChange}
              name={SwitchNames.URGENT}
            />
          }
          className={classes.formControlLabel}
          classes={{ label: classes.formControlLabelText }}
          label='فقط فوری'
          labelPlacement='start'
        />
        <Divider />
        <Box p={1}>
          <ul className={classes.navbarFooter}>
            <li>درباره دیوار</li>
            <li>دریافت برنامه</li>
            <li>پشتیبانی</li>
            <li>بلاگ دیوار</li>
          </ul>
          <Box>
            <img
              style={{ width: '55px', height: 'auto' }}
              src={enamadLogo}
              alt='enamadLogo'
            />
            <img
              style={{ width: '88px', height: 'auto', marginRight: '10px' }}
              src={majaziLogo}
              alt='majaziLogo'
            />
            <img
              style={{ width: '95px', height: 'auto' }}
              src={samandehiLogo}
              alt='samandehiLogo'
            />
          </Box>
        </Box>
      </div>
    </div>
  );
}
