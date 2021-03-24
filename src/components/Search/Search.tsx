import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormEvent, useState } from 'react';
import MegaMenu from '../MegaMenu/MegaMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchBar: {
      margin: '1.75rem',
      position: 'relative',
      top: '50px',
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '600px',
      },
    },
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

const Search: React.FC<{
  setSearchValue: Function;
}> = ({ setSearchValue }) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(search);
  };

  return (
    <div className={classes.searchBar}>
      <Box className={classes.root}>
        <MegaMenu />
        <Box>
          <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
            <TextField
              id='outlined-basic'
              variant='outlined'
              placeholder='جستجو در همه آگهی ها'
              name='search'
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Search;
