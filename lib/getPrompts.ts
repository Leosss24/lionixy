import { supabase } from "./supabase";

export async function getPrompts() {
  const { data, error } = await supabase
    .from("prompts")
    .select("*")
    .eq("is_published", true)
    .limit(10);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}