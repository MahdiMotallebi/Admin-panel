import React from 'react';
import { useProSidebar } from 'react-pro-sidebar';

//Mui
import {
  useTheme,
  Box,
  IconButton,
  Badge,
  Avatar,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tokens, useMode } from '../../theme/themeConfig';

//icons
import {
  BsSun,
  BsMoonStars,
  BsGlobe2,
  BsGrid,
  BsBell,
  BsSearch,
  BsList
} from 'react-icons/bs';

//redux
import { allState, setShowSidebar, toggleMode } from '../../features/slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const BadgeContentBell = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.error.main,
  boxShadow: `0 0 0 3px ${theme.palette.background.default}`
}));

const BadgeContentAvatar = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 3px ${theme.palette.background.default}`
}));
const TopBar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const state = useAppSelector(allState);
  const { collapseSidebar } = useProSidebar();
  const dispatch = useAppDispatch();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
    >
      <Box display="flex" alignItems="center">
        <IconButton
          onClick={() => {
            collapseSidebar(false);
            dispatch(setShowSidebar());
          }}
          sx={{
            display: 'flex',
            [theme.breakpoints.up('xl')]: {
              display: 'none'
            }
          }}
        >
          <BsList color={theme.palette.text.primary} />
        </IconButton>
        <Stack sx={{ cursor: 'pointer' }} direction="row" alignItems="center">
          <IconButton>
            <BsSearch fontSize={20} color={theme.palette.text.primary} />
          </IconButton>
          <Typography
            color={theme.palette.text.primary}
            sx={{
              [theme.breakpoints.down('xl')]: {
                display: 'none'
              }
            }}
          >
            Search (Ctrl + /)
          </Typography>
        </Stack>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap=".5rem"
      >
        <IconButton>
          <BsGlobe2 fontSize={20} color={theme.palette.text.primary} />
        </IconButton>
        <IconButton onClick={() => dispatch(toggleMode())}>
          {theme.palette.mode === 'dark' ? (
            <BsSun fontSize={20} color={theme.palette.text.primary} />
          ) : (
            <BsMoonStars fontSize={20} color={theme.palette.text.primary} />
          )}
        </IconButton>
        <IconButton>
          <BsGrid fontSize={20} color={theme.palette.text.primary} />
        </IconButton>
        <IconButton>
          <Badge overlap="circular" badgeContent={<BadgeContentBell />}>
            <BsBell fontSize={20} color={theme.palette.text.primary} />
          </Badge>
        </IconButton>

        <Badge
          overlap="circular"
          badgeContent={<BadgeContentAvatar />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar
            src="/demo/materialize-mui-react-nextjs-admin-template/demo-2/images/avatars/1.png"
            alt="User Avatar"
            sx={{ width: 40, height: 40 }}
          />
        </Badge>
      </Box>
    </Box>
  );
};

export default TopBar;
