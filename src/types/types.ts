export interface Children {
  children: React.ReactNode;
}

export interface DarkMode {
  theme?: boolean;
  handleTheme?: () => void;
}

export interface ModalWindow {
  loginForm?: boolean;
  registerForm?: boolean;
  userForm?: boolean;
  settingForm?: boolean;
  logoutWindow?: boolean;
  toggleLoginWindow?: () => void;
  closeLoginWindow?: () => void;
  toggleRegisterWindow?: () => void;
  closeRegisterWindow?: () => void;
  openUserWindow?: () => void;
  closeUserWindow?: () => void;
  toggleSettingWindow?: () => void;
  toggleLogoutWindow?: () => void;
  closeAllWindows?: () => void;
}
