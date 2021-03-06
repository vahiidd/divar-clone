import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { preLoad } from '../../api/preLoadData';
import { DivarContext } from '../../context/DivarProvider';
import Cookies from 'js-cookie';

const topCities = [
  ['تهران', 'tehran'],
  ['مشهد', 'mashhad'],
  ['کرج', 'karaj'],
  ['شیراز', 'shiraz'],
  ['اصفهان', 'isfahan'],
  ['اهواز', 'ahvaz'],
  ['تبریز', 'tabriz'],
  ['کرمانشاه', 'kermanshah'],
  ['قم', 'qom'],
  ['رشت', 'rasht'],
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cityButton: {
      color: '#555',
      margin: '0px 5px',
      backgroundColor: 'white',
      fontFamily: 'Vazir',
      padding: '7px 16px',
      '&:hover': {
        backgroundColor: '#hhh',
        color: 'black',
      },
    },
    modal: {
      display: 'block',
      overflow: 'scroll',
      position: 'absolute',
      top: '10%',
      left: '10%',
      height: '100%',
      marginTop: '30px',
      border: 'none',
    },
    paper: {
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 1, 3),
      backgroundColor: 'white',
      width: '790px',
      margin: 'auto',
      border: 'none',
      borderRadius: '10px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    activeCityBtn: {
      color: 'white',
      margin: '12px',
      backgroundColor: '#a62626',
      padding: '5px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      width: '130px',
      '&:hover': {
        backgroundColor: '#be3737',
      },
    },
    cityBtn: {
      color: '#a62626',
      margin: '12px',
      backgroundColor: 'white',
      textDecoration: 'none',
      padding: '5px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      width: '130px',
      borderColor: '#a62626',
      '&:hover': {
        backgroundColor: 'rgba(166,38,38,.04)',
      },
    },
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

export default function CitiesModal() {
  const { city, setCity } = useContext(DivarContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.cityButton} onClick={handleModalOpen}>
        <LocationOnIcon />
        {city
          ? preLoad.city.compressedData.find((x) => x[2] === city)![1]
          : null}
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3
              style={{ fontFamily: 'Vazir', margin: '0px 5px 20px 5px' }}
              id='transition-modal-title'
            >
              انتخاب شهر
            </h3>
            <TextField
              id='outlined-full-width'
              style={{ margin: 0 }}
              placeholder='جستجوی سریع نام شهر...'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              variant='outlined'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input ? (
              <>
                {preLoad.city.compressedData
                  .filter((city) => (city[1] as string).includes(input))
                  .map((city) => (
                    <Link style={{ textDecoration: 'none' }} to={`/${city[2]}`}>
                      <Button
                        onClick={() => {
                          handleModalClose();
                          setCity(city[2] as string);
                          Cookies.set('city', city[2] as string);
                        }}
                        variant='outlined'
                        className={classes.cityBtn}
                      >
                        {city[1]}
                      </Button>
                    </Link>
                  ))}
              </>
            ) : (
              <>
                <p
                  style={{ fontFamily: 'Vazir', margin: '30px 10px 10px' }}
                  id='transition-modal-description'
                >
                  شهر های پر بازدید
                </p>
                <Box>
                  {/* @ts-ignore */}
                  {topCities.map((city) => (
                    <Link style={{ textDecoration: 'none' }} to={`/${city[1]}`}>
                      <Button
                        onClick={() => {
                          handleModalClose();
                          setCity(city[1]);
                          Cookies.set('city', city[1]);
                        }}
                        variant='outlined'
                        className={classes.cityBtn}
                      >
                        {city[0]}
                      </Button>
                    </Link>
                  ))}
                </Box>
                <p
                  style={{ fontFamily: 'Vazir', margin: '30px 10px 10px' }}
                  id='transition-modal-description'
                >
                  همه شهر ها
                </p>
                {/* @ts-ignore */}
                {preLoad.city.compressedData.map((city) => (
                  <Link style={{ textDecoration: 'none' }} to={`/${city[2]}`}>
                    <Button
                      onClick={() => {
                        handleModalClose();
                        setCity(city[2] as string);
                        Cookies.set('city', city[2] as string);
                      }}
                      variant='outlined'
                      className={classes.cityBtn}
                    >
                      {city[1]}
                    </Button>
                  </Link>
                ))}
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
