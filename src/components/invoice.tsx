import React from 'react';

//data
import { mockDataInvoices } from '../data/mockData';

//Mui
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, useTheme, Paper, Avatar } from '@mui/material';
import { tokens } from '../theme/themeConfig';

const Invoice = () => {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 0.8,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box display="flex" gap={1} alignItems="center">
            <Avatar alt="Remy Sharp" src="/img/user.jpg" />
            {params.row.name}
          </Box>
        );
      },
      cellClassName: 'name-column--cell'
    },

    {
      field: 'email',
      headerName: 'Email',
      flex: 0.8
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 0.5
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box
            borderRadius={2}
            p="0 1rem"
            sx={{
              background: `${
                (params.row.status === 'active' && colors.success[700]) ||
                (params.row.status === 'inactive' && colors.grey[700]) ||
                (params.row.status === 'pending' && colors.warning[700])
              }`,
              color: `${
                (params.row.status === 'active' && colors.success[300]) ||
                (params.row.status === 'inactive' && colors.grey[300]) ||
                (params.row.status === 'pending' && colors.warning[300])
              }`
            }}
          >
            {params.row.status}
          </Box>
        );
      }
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 0.5
    }
  ];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={0}
      sx={{
        height: '80vh',
        border: `1px solid ${
          theme.palette.mode === 'light'
            ? theme.palette.border.main
            : theme.palette.border.dark
        }`,
        background: `${theme.palette.background['paper']}`,
        borderRadius: '1rem',
        '& .MuiDataGrid-root': {
          border: 'none',
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid ${
              theme.palette.mode === 'light'
                ? theme.palette.border.main
                : theme.palette.border.dark
            }`,
            '&:focus-within': {
              outline: 'none'
            }
          },
          '& .MuiDataGrid-columnHeaders': {
            '&:focus-within': {
              outline: 'none'
            }
          }
        },

        '& .MuiDataGrid-columnHeaders': {
          borderBottom: `1px solid ${
            theme.palette.mode === 'light'
              ? theme.palette.border.main
              : theme.palette.border.dark
          }`
        },
        '& .MuiDataGrid-virtualScroller': {
          //   backgroundColor: colors.primary[400]
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: `1px solid ${
            theme.palette.mode === 'light'
              ? theme.palette.border.main
              : theme.palette.border.dark
          }`
        },
        '& .MuiCheckbox-root': {
          //   color: `${colors.info[500]} `
        }
      }}
    >
      <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    </Paper>
  );
};

export default Invoice;
