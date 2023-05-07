import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/types/supabase";

const url = process.env.SUPABASE_PROJECT_URL;
const api = process.env.SUPABASE_API_KEY;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const supabase = SupabaseClient(url, api);
export default supabase;
