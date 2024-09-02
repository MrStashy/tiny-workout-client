import { getUserByUsername, getUserByEmail } from "./apiFunctions";

async function validateRegisterCredentials(username, password, email) {
  const errors = {};


  if (!email) {
    errors.email = "Email cannot be empty";
  }

  if (!username) {
    errors.username = "Username cannot be empty";
  }

  if (!password) {
    errors.password = "Password cannot be empty";
  }

  if (!errors.email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
      errors.email = "Email invalid";
    }
  }
 
  if (!errors.email) {
    const foundUserByEmail = await getUserByEmail(email);
    if (foundUserByEmail) {
      errors.email = "User already exists with that email address";
    }
  }

  if(!errors.username) {
    const foundUserByUsername = await getUserByUsername(username);
    if (foundUserByUsername) {
      errors.username = "That username is already taken"
    }
  }

    if (Object.keys(errors).length > 0) {
        throw errors
    }
}

export { validateRegisterCredentials };
