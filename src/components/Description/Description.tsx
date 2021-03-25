import { Box, Button, createStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductProvider';
import Divar from '../Divar/Divar';

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
      fontWeight: 'bold',
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
    listData: {
      fontFamily: 'Vazir',
    },
    linksBtn: {
      fontFamily: 'Vazir',
      backgroundColor: 'rgba(224, 224, 224, .3)',
      margin: '5px',
      color: 'gray',
    },
  })
);

const Description = () => {
  const classes = useStyles();
  const { pageData } = useContext(ProductContext);
  const { title, description } =
    'data' in pageData
      ? pageData.data.share
      : { title: null, description: null };

  return (
    <>
      <Box className={classes.description}>
        <Typography variant='h1' className={classes.descriptionHeader}>
          {title}
        </Typography>
        <Typography variant='h5' className={classes.descriptionHelper}>
          {'widgets' in pageData && pageData.widgets.header.subtitle}
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
        <Box width='78%' my={3}>
          {'widgets' in pageData &&
            pageData.widgets.list_data.map((data) => (
              <>
                <Box display='flex' justifyContent='space-between' p={1}>
                  <Typography className={classes.listData}>
                    {data.title}
                  </Typography>
                  <Typography className={classes.listData} color='textPrimary'>
                    {data.value}
                  </Typography>
                </Box>
                <hr style={{ opacity: '.2' }} />
              </>
            ))}
        </Box>
        <Typography
          variant='h6'
          style={{ fontFamily: 'Vazir', fontWeight: 500, color: 'black' }}
        >
          توضیحات
        </Typography>
        <Typography style={{ fontFamily: 'Vazir', marginTop: '10px', whiteSpace: 'pre-wrap' }} color='textPrimary'>
          {description}
        </Typography>
        {'widgets' in pageData && (
          <Box my={2}>
            {pageData.widgets.links.map((link) => (
              <Button className={classes.linksBtn}>{link.title}</Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Description;
