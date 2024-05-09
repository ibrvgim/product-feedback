import { FeedbackObject, InitialFeedbackData } from '../../types/types';
import { supabase } from '../other/supabase';

export async function initialDataStoring({
  companyId,
  companyName,
}: InitialFeedbackData) {
  const { data, error } = await supabase
    .from('feedbacks')
    .insert([
      {
        company_id: companyId,
        company_name: companyName,
        feedbacks: { feedbacks: [] },
      },
    ])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function createFeedback({
  companyID,
  feedbackItem,
}: {
  companyID: string;
  feedbackItem: FeedbackObject[];
}) {
  const { data, error } = await supabase
    .from('feedbacks')
    .update({
      feedbacks: {
        feedbacks: [...feedbackItem],
      },
    })
    .eq('company_id', companyID)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateCompanyNameInFeedbacks({
  companyId,
  companyName,
}: {
  companyId: string;
  companyName: string;
}) {
  const { data, error } = await supabase
    .from('feedbacks')
    .update({ company_name: companyName })
    .eq('company_id', companyId)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getFeedbacks() {
  const { data: feedbacks, error } = await supabase
    .from('feedbacks')
    .select('*');

  if (error) throw new Error(error.message);
  return feedbacks;
}
