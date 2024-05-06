import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginForm: false,
  registerForm: false,
  userForm: false,
  settingForm: false,
  logoutWindow: false,
};

const modalWindowSlice = createSlice({
  name: 'modalWindows',
  initialState,
  reducers: {
    toggleLoginWindow: (state) => {
      state.loginForm = !state.loginForm;
    },

    closeLoginWindow: (state) => {
      state.loginForm = false;
    },

    toggleRegisterWindow: (state) => {
      state.registerForm = !state.registerForm;
    },

    closeRegisterWindow: (state) => {
      state.registerForm = false;
    },

    openUserWindow: (state) => {
      state.userForm = true;
    },

    closeUserWindow: (state) => {
      state.userForm = false;
    },

    toggleSettingWindow: (state) => {
      state.settingForm = !state.settingForm;
    },

    toggleLogoutWindow: (state) => {
      state.logoutWindow = !state.logoutWindow;
    },

    closeAllWindows: (state) => {
      state.loginForm = false;
      state.registerForm = false;
      state.userForm = false;
      state.settingForm = false;
      state.logoutWindow = false;
    },
  },
});

export const {
  toggleLoginWindow,
  closeLoginWindow,
  toggleRegisterWindow,
  closeRegisterWindow,
  openUserWindow,
  closeUserWindow,
  toggleSettingWindow,
  toggleLogoutWindow,
  closeAllWindows,
} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
