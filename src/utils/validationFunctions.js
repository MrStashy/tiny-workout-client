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

  if (!errors.username) {
    const foundUserByUsername = await getUserByUsername(username);
    if (foundUserByUsername) {
      errors.username = "That username is already taken";
    }
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}

function validateUserDetails(height, weight, dob) {
  const errors = {};

  if (!height) {
    errors.height = "Height cannot be empty";
  }

  if (!weight) {
    errors.weight = "Weight cannot be empty";
  }

  if (!dob) {
    errors.dob = "Date of birth cannot be empty";
  }

  if (!errors.dob) {
    if (!validateDate(dob)) {
      errors.dob = "Invalid date";
    }
  }

  if(!errors.height) {
    const heightAsNumber = Number(height)
    if(isNaN(heightAsNumber) || heightAsNumber < 100 || heightAsNumber > 250) {
      errors.height = "Invalid height"
    }
  }

  if (!errors.weight) {
    const weightAsNumber = Number(weight)
    if(isNaN(weightAsNumber) || weightAsNumber < 30 || weightAsNumber > 300) {
      errors.weight = "Invalid weight"
    }
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}

function validateDate(date) {
  if (date.length !== 10) {
    return false;
  }

  if (isNaN(Number(date.replaceAll("/", "")))) {
    return false;
  }

  const [day, month, year] = date.split("/");
  const formattedDate = new Date(year, month - 1, day);
  if (
    formattedDate.getFullYear() !== parseInt(year, 10) ||
    formattedDate.getMonth() !== month - 1 ||
    formattedDate.getDate() !== parseInt(day, 10)
  ) {
    return false;
  }

  return true;
}

export { validateRegisterCredentials, validateUserDetails };
