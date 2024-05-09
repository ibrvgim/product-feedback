import { inputCleaner } from './helpers';

export function handleID(data: any) {
  if (!data) return;

  const companyName = data?.user?.user_metadata.companyName;
  const companyId = data?.user?.id;
  const id = `${inputCleaner(companyName)}-${companyId}`;

  return { companyId, companyName, id };
}
