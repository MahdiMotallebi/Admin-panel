import React from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar
} from 'react-pro-sidebar';

//MUI
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Divider,
  Chip
} from '@mui/material';

//icons
import {
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsGem,
  BsEnvelope,
  BsChatLeft,
  BsCalendar2Date,
  BsStickies,
  BsPerson,
  BsChevronRight,
  BsHouseDoor,
  BsType,
  BsBox,
  BsCardText,
  BsCollection,
  BsX
} from 'react-icons/bs';

//utils
import { tokens } from '../../theme/themeConfig';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { allState, setShowSidebar } from '../../features/slice';

const SidebarLeft = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const state = useAppSelector(allState);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        height: '100%',
        left: `${state.showSidebar ? 0 : '-150%'}`,
        transition: '.5s',
        [theme.breakpoints.up('xl')]: {
          display: 'flex',
          position: 'sticky',
          left: 0
        }
      }}
    >
      <Sidebar
        width="280px"
        backgroundColor={theme.palette.background['paper']}
      >
        <Box
          sx={{
            height: '100vh',
            '& .menu-item': {
              textTransform: 'capitalize',
              listStyle: 'circle',
              '& .menu-anchor': {
                margin: `${!collapsed && '0 1rem'}`,
                padding: `${!collapsed && '0 1rem 0 0'}`,
                transition: '.3s',
                borderRadius: '10px',
                '&:hover': {
                  background: `${colors.grey[700]}`,
                  borderRadius: '10px'
                }
              }
            },
            '& .sub-menu-content': {
              background: `${theme.palette.background['paper']}`,
              padding: `${collapsed && '1rem'}`,

              '& .menu-anchor': {
                padding: `${!collapsed && '0 0 0 3rem'}`
              }
            }
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={collapsed ? 'center' : 'space-between'}
            p={1.5}
          >
            {!collapsed && (
              <Box display="flex" alignItems="center">
                <IconButton>
                  <BsGem color={colors.info[400]} fontSize={30} />
                </IconButton>
                <Typography
                  variant="h5"
                  fontWeight="700"
                  sx={{ textTransform: 'capitalize' }}
                >
                  materialize
                </Typography>
              </Box>
            )}

            <IconButton
              sx={{
                [theme.breakpoints.down('xl')]: {
                  display: 'none'
                }
              }}
              onClick={() => collapseSidebar()}
            >
              {collapsed ? (
                <BsChevronDoubleRight fontSize={20} />
              ) : (
                <BsChevronDoubleLeft fontSize={20} />
              )}
            </IconButton>
            <IconButton
              sx={{
                display: 'flex',
                [theme.breakpoints.up('xl')]: {
                  display: 'none'
                }
              }}
              onClick={() => dispatch(setShowSidebar())}
            >
              <BsX fontSize={20} />
            </IconButton>
          </Box>
          <Menu
            renderExpandIcon={() => (
              <BsChevronRight display="flex" fontSize={12} />
            )}
            renderMenuItemStyles={() => ({
              color: `${theme.palette.text.primary}`
            })}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <SubMenu
              label="Dashboards"
              suffix={
                <Chip
                  label="new"
                  color="error"
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '.6rem',
                    padding: '0 .3rem',
                    height: '25px'
                  }}
                />
              }
              icon={<BsHouseDoor fontSize={20} />}
            >
              <MenuItem> CRM </MenuItem>
              <MenuItem> Analysis </MenuItem>
              <MenuItem> eCommerce </MenuItem>
            </SubMenu>
            {!collapsed && (
              <Divider
                sx={{
                  '&::after': {
                    display: 'none'
                  },
                  '&::before': {
                    width: '1.2rem'
                  },
                  color: `${theme.palette.text.secondary}`,
                  textTransform: 'uppercase',
                  fontSize: '.8rem',
                  m: '1.5rem 0 1rem 0'
                }}
              >
                apps & pages
              </Divider>
            )}
            <MenuItem icon={<BsEnvelope fontSize={20} />}>email</MenuItem>
            <MenuItem icon={<BsChatLeft fontSize={20} />}>chat</MenuItem>
            <MenuItem icon={<BsCalendar2Date fontSize={20} />}>
              calendar
            </MenuItem>
            <SubMenu label="invoice" icon={<BsStickies fontSize={20} />}>
              <MenuItem> edit </MenuItem>
              <MenuItem> add </MenuItem>
              <MenuItem> delete </MenuItem>
            </SubMenu>
            <SubMenu label="user" icon={<BsPerson fontSize={20} />}>
              <MenuItem> list </MenuItem>
              <MenuItem> view </MenuItem>
            </SubMenu>
            {!collapsed && (
              <Divider
                sx={{
                  '&::after': {
                    display: 'none'
                  },
                  '&::before': {
                    width: '1.2rem'
                  },
                  color: `${theme.palette.text.secondary}`,

                  textTransform: 'uppercase',
                  fontSize: '.8rem',
                  m: '1.5rem 0 1rem 0'
                }}
              >
                userInterface
              </Divider>
            )}
            <MenuItem icon={<BsType fontSize={20} />}>typography</MenuItem>
            <MenuItem icon={<BsBox fontSize={20} />}>icons</MenuItem>

            <SubMenu
              label="cards"
              icon={<BsCardText fontSize={20} />}
              suffix={
                <Chip
                  label="18"
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '.6rem',
                    height: '25px',
                    bgcolor: `${colors.info[500]}`,
                    color: `${colors.grey[900]}`
                  }}
                />
              }
            >
              <MenuItem> edit </MenuItem>
              <MenuItem> add </MenuItem>
              <MenuItem> delete </MenuItem>
            </SubMenu>
            <SubMenu label="components" icon={<BsCollection fontSize={20} />}>
              <MenuItem> list </MenuItem>
              <MenuItem> chip </MenuItem>
            </SubMenu>
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SidebarLeft;
