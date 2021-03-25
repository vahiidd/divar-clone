import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ProductContext } from '../../context/ProductProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10px',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    breadcrumbs: {
      fontSize: '12px',
      fontFamily: 'Vazir',
    },
  })
);

export default function CustomSeparator() {
  const { pageData } = useContext(ProductContext);
  const classes = useStyles();
  const [navigationIcon, setNavigationIcon] = useState({
    toggleIcon: () => <NavigateBeforeIcon fontSize='small' />,
  });

  const mouseEnterHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateNextIcon fontSize='small' />,
    });
  };

  const mouseLeaveHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateBeforeIcon fontSize='small' />,
    });
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {'widgets' in pageData ? (
        <Breadcrumbs
          className={classes.breadcrumbs}
          separator={navigationIcon.toggleIcon()}
          aria-label='breadcrumb'
        >
          {pageData.widgets.breadcrumb.categories
            .map(({ title, relative_url }) => (
              <Link style={{ color: 'gray' }} to={`${relative_url}`}>
                {title}
              </Link>
            ))
            .reverse()
            .filter((_, index) => index !== 0)}
          {'data' in pageData ? (
            <Typography
              className={classes.breadcrumbs}
              style={{ color: 'lightgray' }}
            >
              {pageData.data.share.title}
            </Typography>
          ) : null}
        </Breadcrumbs>
      ) : null}
    </div>
  );
}
