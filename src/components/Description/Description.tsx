import { Box, Button, createStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      width: '50%',
      textAlign: 'right',
      flex: '0 0 50%',
    },
    descriptionHeader: {
      fontFamily: 'Vazir',
      fontSize: '1.5em',
      color: 'rgba(0,0,0,.87)',
      fontWeight: 500,
    },
    descriptionHelper: {
      margin: '8px 0 16px',
      color: 'rgba(0,0,0,.56)',
      lineHeight: 2,
      fontFamily: 'Vazir',
      fontSize: '1em',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    chatBtn: {
      color: '#a62626',
      margin: '2px',
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
    infoBtn: {
      color: 'white',
      margin: '2px',
      backgroundColor: '#a62626',
      padding: '5px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      width: '130px',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#be3737',
        boxShadow: 'none',
      },
    },
    socialMedia: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginRight: '30px',
    },
  })
);

interface descriptionType {
  title: string;
  description: string;
}

const Description: React.FC<descriptionType> = ({ title, description }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.description}>
        <Typography variant='h1' className={classes.descriptionHeader}>
          {title}
        </Typography>
        <Typography variant='h5' className={classes.descriptionHelper}>
          دقایقی پیش در کرج
        </Typography>
        <Box className={classes.buttons}>
          <Button variant='contained' className={classes.infoBtn}>
            اطلاعات تماس
          </Button>
          <Button variant='outlined' className={classes.chatBtn}>
            چت
          </Button>
          <Box className={classes.socialMedia}>
            <IconButton>
              <BookmarkBorderIcon style={{ fontSize: '.9em' }} />
            </IconButton>
            <IconButton>
              <ShareIcon style={{ fontSize: '.9em' }} />
            </IconButton>
          </Box>
        </Box>
        <Typography
          style={{ fontSize: '15px', fontFamily: 'Vazir', fontWeight: 'bold' }}
        >
          توضیحات
        </Typography>
        <Typography>{description}</Typography>
      </Box>
    </>
  );
};

export default Description;
