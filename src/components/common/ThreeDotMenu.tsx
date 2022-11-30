import { MouseEvent, useState } from 'react';

//Mui
import { IconButton, Menu, MenuItem } from '@mui/material';

//icons
import { BsThreeDotsVertical } from 'react-icons/bs';

const ThreeDotMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BsThreeDotsVertical fontSize={20} />
      </IconButton>
      <Menu
        keepMounted
        id="long-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5
          }
        }}
      >
        {['last 28 days', 'last month', 'last year'].map((option: string) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
            sx={{
              textTransform: 'capitalize'
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ThreeDotMenu;
