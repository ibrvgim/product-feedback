import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eizmtlllavsptivwgvpd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpem10bGxsYXZzcHRpdndndnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5ODk4OTYsImV4cCI6MjAzMDU2NTg5Nn0.bi0U3mvrPtM-PsYhwW7pKkDSmMj_ztN7U8VsnWwvdrM';

export const supabase = createClient(supabaseUrl, supabaseKey);
