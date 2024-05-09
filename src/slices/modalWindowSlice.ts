import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginForm: false,
  registerForm: false,
  userForm: true,
  settingForm: false,
  logoutWindow: false,
};

const modalWindowSlice = createSlice({
  name: 'modalWindows',
  initialState,
  reducers: {
    openLoginWindow: (state) => {
      state.loginForm = true;
    },

    openRegisterWindow: (state) => {
      state.registerForm = true;
    },

    openUserWindow: (state) => {
      state.userForm = true;
    },

    openSettingWindow: (state) => {
      state.settingForm = true;
    },

    openLogoutWindow: (state) => {
      state.logoutWindow = true;
    },

    closeAllWindows: (state) => {
      if (state.loginForm) state.loginForm = false;
      if (state.registerForm) state.registerForm = false;
      if (state.userForm) state.userForm = false;
      if (state.settingForm) state.settingForm = false;
      if (state.logoutWindow) state.logoutWindow = false;
    },
  },
});

export const {
  openLoginWindow,
  openRegisterWindow,
  openUserWindow,
  openSettingWindow,
  openLogoutWindow,
  closeAllWindows,
} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
