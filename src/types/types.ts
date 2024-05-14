// COMMON TYPES
export interface Children {
  children: React.ReactNode;
}

export interface DarkMode {
  theme?: boolean;
  handleTheme?: () => void;
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

export interface CompanyData {
  id: string | number;
  companyId: string;
  companyName: string;
}

// REACT REDUX STRUCTURE
export interface States {
  modalWindow: ModalWindow;
  sortBy: SortBy;
  votes: Votes;
}

export interface SortBy {
  filter: string;
  value: string;
}

export interface ModalWindow {
  loginForm?: boolean;
  registerForm?: boolean;
  userForm?: boolean;
  settingForm?: boolean;
  logoutWindow?: boolean;
  editForm?: boolean;
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

interface Votes {
  user: {
    firstName: string;
    image: string;
    lastName: string;
    nickname: string;
    votedFeedbacks: number[];
  };
}

// FEEDBACKS STRUCTURE
export interface FeedbacksRoot {
  id: number;
  created_at: string;
  company_id: string;
  company_name: string;
  feedbacks: FeedbackItem;
}

export interface FeedbackItem {
  feedbacks: FeedbackObject[];
}

export interface FeedbackObject {
  id: string | number;
  title: string;
  category: string;
  upvotes: string | number;
  status: string;
  description: string;
  comments: Comments[];
}

export interface Comments {
  id: number | string;
  content: string;
  replies: Reply[];
  user: UserInfo;
}

export interface UserInfo {
  image: string;
  name: string;
  username: string;
}

export interface UserInitialData {
  image: string;
  firstName: string;
  lastName: string;
  nickname: string;
}

export interface Reply {
  id: number;
  content: string;
  replyingTo: string;
  user: UserInfo;
}
