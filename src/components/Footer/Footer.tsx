import {
  Container,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from '../../styles/App.module.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Logo from '../../logo/logo.svg';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      direction: 'rtl',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      height: '40px',
      position: 'relative',
      margin: 0,
      marginTop: '128px',
      boxShadow: 'none',
    },
    iconBtn: {
      transition: 'opacity 0.2s',
      padding: '0px 10px',
      opacity: '0.5',
      '&:hover': {
        backgroundColor: 'white',
        opacity: '0.7',
      },
    },
    button: {
      color: '#999',
      backgroundColor: 'white',
      fontFamily: 'Vazir',
      fontSize: '10px',
      transition: 'color 0.2s',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#666',
        curser: 'pointer',
      },
    },
    toolbar: {
      minHeight: '50px',
      diplay: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    socialMedia: {
      marginRight: '100px',
    },
    logo: {
      width: '30px',
      height: '30px',
      filter: 'grayscale(90%) opacity(50%)',
      transition: 'filter 0.2s',
      '&:hover': {
        filter: 'grayscale(90%) opacity(70%)',
      },
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <AppBar position="static" className={classes.root}>
        <Link to="/tehran">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link className={styles.link} to="/about">
              <Button className={classes.button}>درباره دیوار</Button>
            </Link>
            <Link className={styles.link} to="/support">
              <Button className={classes.button}>پشتیبانی</Button>
            </Link>
            <Link className={styles.link} to="/blog">
              <Button className={classes.button}> بلاگ دیوار</Button>
            </Link>
          </div>
        </Toolbar>
        <div className={classes.socialMedia}>
          <a
            className={styles.link}
            href="https://www.instagram.com/divar.official"
          >
            <IconButton className={classes.iconBtn}>
              <InstagramIcon style={{ fontSize: '.9em' }} />
            </IconButton>
          </a>
          <a className={styles.link} href="https://twitter.com/divar_official">
            <IconButton className={classes.iconBtn}>
              <TwitterIcon style={{ fontSize: '.9em' }} />
            </IconButton>
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/company/divarofficial"
          >
            <IconButton className={classes.iconBtn}>
              <LinkedInIcon style={{ fontSize: '.9em' }} />
            </IconButton>
          </a>
        </div>
      </AppBar>
    </Container>
  );
}
