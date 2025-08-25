import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const MockUserComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [currentUser, setCurrentUser] = useState<string>('Choose Account');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('EVENT', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ev) => {
    setAnchorEl(null);
    setCurrentUser(ev?.target.textContent);
  };

  return (
    <div
      style={{
        border: '3px solid black',
        margin: '5px 31px',
        backgroundColor: '#dde3e3',
        color: '#979c9c !important',
        fontWeight: '700',
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        value={currentUser}
        onClick={handleClick}
      >
        {currentUser}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={(prevState) => handleClose(prevState)}>Max Plitty</MenuItem>
        <MenuItem onClick={(prevState) => handleClose(prevState)}>Jack Tile</MenuItem>
        <MenuItem onClick={(prevState) => handleClose(prevState)}>Lina Guess</MenuItem>
        <MenuItem onClick={(prevState) => handleClose(prevState)}>Project Manager</MenuItem>
      </Menu>
    </div>
  );
};
export default MockUserComponent;
