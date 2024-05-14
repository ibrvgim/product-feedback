import { inputCleaner } from './helpers';

interface Data {
  user: User;
}

interface User {
  user_metadata: {
    companyName: string;
  };
  id: string;
}

export function handleID(data: Data) {
  if (!data) return;

  const companyName = data?.user?.user_metadata.companyName;
  const companyId = data?.user?.id;
  const id = `${inputCleaner(companyName)}-${companyId}`;

  return { companyId, companyName, id };
}
