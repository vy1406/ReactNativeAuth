import axios from "axios";

const API_KEY = process.env.API_KEY;

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

export async function createUser(email, password) {
  const token = await authenticate("signUp", email, password);
  return token;
}
export async function login(email, password) {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
}
