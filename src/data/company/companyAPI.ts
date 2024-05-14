import { CompanyData, UpdateData } from '../../types/types';
import { supabase } from '../other/supabase';

export async function createCompany({
  email,
  password,
  companyName,
}: CompanyData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        companyName,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function loginMyCompany({ email, password }: CompanyData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCompany() {
  const {
    data: { user: company },
  } = await supabase.auth.getUser();

  return company;
}

export async function updateCompany({ password, companyName }: UpdateData) {
  if (!password) {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        companyName,
      },
    });

    if (error) throw new Error(error.message);
    return data;
  } else {
    const { data, error } = await supabase.auth.updateUser({
      password,
      data: {
        companyName,
      },
    });

    if (error) throw new Error(error.message);
    return data;
  }
}

export async function logoutCompany() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
