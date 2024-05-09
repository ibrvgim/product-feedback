import { userAvatars } from '../data/user/avatars';

export function inputCleaner(value: string) {
  if (!value) return;

  return value
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '-')
    .trim()
    .toLowerCase();
}

export function formatString(string: string) {
  if (!string) return;
  return string.length > 2
    ? string[0].toUpperCase() + string.slice(1).toLowerCase()
    : string;
}

export function getRandomAvatar() {
  const avatarNumbers = userAvatars.length;
  const randomNumber = Math.floor(Math.random() * avatarNumbers + 1);

  return userAvatars[randomNumber];
}
