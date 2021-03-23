import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import NestedMenuItem from '../NestedMenuItem/NestedMenuItem';
import { submenu_data } from '../../components/MegaMenu/Submenu-data';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropdownBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '160px',
      height: '55px',
      fontFamily: 'Vazir',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    submenu: {
      width: '650px',
      height: '450px',
      border: '1px solid white',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    menuItem_header: {
      fontFamily: 'Vazir',
      fontSize: '14px',
      padding: '10px',
    },
    menuItem_item: {
      fontFamily: 'Vazir',
      fontSize: '12px',
      color: 'gray',
      paddingTop: '1px',
      paddingBottom: '1px',
      '&:hover': {
        color: '#a62626',
        backgroundColor: 'white',
      },
    },
    menuItem_footer: {
      fontFamily: 'Vazir',
      fontSize: '12px',
      color: '#a62626',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: '420px',
      left: '10px',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  })
);

export default function MegaMenu() {
  const classes = useStyles();
  const [menuPosition, setMenuPosition] = useState<any>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: any) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: dropdownBtnRef.current?.getBoundingClientRect().bottom,
      left: dropdownBtnRef.current?.getBoundingClientRect().left,
    });
  };
  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  return (
    <Box>
      <div onClick={handleClick}>
        <Button
          ref={dropdownBtnRef}
          variant="contained"
          className={classes.dropdownBtn}
        >
          <p>همه آگهی ها</p> <ArrowDropDownOutlinedIcon />
        </Button>
        <Menu
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition}
        >
          <MenuItem style={{ fontFamily: 'Vazir' }}>همه ی آگهی ها</MenuItem>
          {/* @ts-ignore */}
          {submenu_data.map((item) => {
            return (
              <NestedMenuItem
                left
                key={item.title}
                label={item.title}
                MenuItemProps={{
                  dense: false,
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    direction: 'rtl',
                    padding: '0.5em 0.9em',
                    fontFamily: 'Vazir',
                    fontSize: '14px',
                  },
                }}
                mainMenuOpen={!!menuPosition}
                onClick={handleItemClick}
              >
                {/* @ts-ignore */}
                <Box className={classes.submenu} key={item.id}>
                  {item.info &&
                    item.info.map((categoryItem) => (
                      <div>
                        <Typography
                          className={classes.menuItem_header}
                          display="block"
                          variant="h6"
                          align="right"
                        >
                          <div>{categoryItem.header}</div>
                        </Typography>
                        {categoryItem.list &&
                          categoryItem.list.map((li) => (
                            <div>
                              <MenuItem
                                className={classes.menuItem_item}
                                onClick={handleItemClick}
                              >
                                <Typography
                                  className={classes.menuItem_item}
                                  key={li}
                                >
                                  {li}
                                  <br />
                                </Typography>
                              </MenuItem>
                            </div>
                          ))}
                      </div>
                    ))}
                  <Button className={classes.menuItem_footer}>
                    <div style={{ fontSize: '15px' }}>{item.footer}</div>
                    <ArrowBackIosOutlinedIcon
                      style={{ fontSize: '13px', margin: '10px' }}
                    />
                  </Button>
                </Box>
              </NestedMenuItem>
            );
          })}
        </Menu>
      </div>
    </Box>
  );
}
