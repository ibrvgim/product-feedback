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

export interface CompanyData {
  email: string;
  password: string;
}

export interface CreateCompany {
  email: string;
  password: string;
  companyName: string;
}

export interface CompanyFormData {
  companyName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface InitialFeedbackData {
  companyId: string;
  companyName: string;
}
