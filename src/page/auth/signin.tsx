import supabase from '../../utils/supabase'
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });
}
export default signInWithEmail;