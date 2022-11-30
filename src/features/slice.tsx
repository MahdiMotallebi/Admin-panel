import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { PaletteMode } from '@mui/material';

interface adminState {
  showSidebar: boolean;
  mode: PaletteMode;
}

const initialState: adminState = {
  showSidebar: false,
  mode: 'light'
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const allState = (state: RootState) => state.adminSlice;
export const { setShowSidebar, toggleMode } = adminSlice.actions;
export default adminSlice.reducer;
