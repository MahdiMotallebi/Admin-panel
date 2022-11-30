import React from 'react';
import { useMode } from './theme/themeConfig';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';

//Mui
import { Stack, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//style
import './styles/global.scss';

//components
import SidebarLeft from './pages/global/SidebarLeft';
import Layout from './components/layout';
import CRM from './pages/dashboard/CRM';

const App: React.FC = () => {
  const { theme } = useMode();
  return (
    <ProSidebarProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex">
          <SidebarLeft />
          <Box width="100%" component="main">
            <Routes>
              <Route path="/" element={<CRM />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ProSidebarProvider>
  );
};

export default App;
