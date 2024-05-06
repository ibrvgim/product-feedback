export function inputCleaner(value: string) {
  return value
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\./g, '-')
    .trim()
    .toLowerCase();
}
