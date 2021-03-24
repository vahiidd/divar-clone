import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { suggestion } from '../../api/api_types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '5px',
      border: '1px solid #a62626',
      color: '#a62626',
      fontFamily: 'Vazir',
      borderRadius: '30px',
      '&:hover': {
        backgroundColor: '#be3737',
        color: 'white',
        curser: 'pointer',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    sugBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'cneter',
      margin: '3.4rem 23px 0 3rem',
    },
  })
);

interface propsType {
  suggestion_list: suggestion[];
  setCategory: Function;
}

const Suggestion: React.FC<propsType> = ({ suggestion_list, setCategory }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.sugBar}>
        {suggestion_list.map((suggestion) => (
          <Button
            key={suggestion.displayed_text}
            variant='outlined'
            size='small'
            className={classes.button}
            onClick={() => {
              setCategory(suggestion.value.category.value);
            }}
          >
            {suggestion.displayed_text}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default Suggestion;
