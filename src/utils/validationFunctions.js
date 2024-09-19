import { getUserByUsername, getUserByEmail } from "./apiFunctions";

async function validateSignInCredentials(email, password) {
  const errors = {};

  if (!email) {
    errors.email = "Email cannot be empty";
  }

  if (!password) {
    errors.password = "Password cannot be empty";
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}

async function validateRegisterCredentials(username, password, confirmPassword, email) {
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

  if(!errors.password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    if(!regex.test(password)) {
      errors.password = "Needs 8 chars, an uppercase letter, and a number"
    }
  }

  if(!errors.password && password !== confirmPassword) {
    errors.password = "Passwords don't match"
    errors.confirmPassword = "Passwords don't match"
  }

  if (!errors.email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      errors.email = "Invalid email";
    }
  }

  if (!errors.email) {
    try {
      const foundUserByEmail = await getUserByEmail(email);
      if (foundUserByEmail) {
        errors.email = "User already exists with that email address";
      }
    } catch (e) {
      console.error(e)
    }   
  }

  if (!errors.username) {
    const foundUserByUsername = await getUserByUsername(username);
    if (foundUserByUsername) {
      errors.username = "That username is taken";
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
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return false;
  }

  const [year, month, day] = date.split("-");
  if (
    parsedDate.getFullYear() !== parseInt(year, 10) ||
    parsedDate.getMonth() + 1 !== parseInt(month, 10) ||
    parsedDate.getDate() !== parseInt(day, 10)
  ) {
    return false;
  }

  return true;
}

function validateWorkout(workout) {
  if (workout.length === 0) {
    throw "You can't submit a workout with no exercises"
  }

  if(!workout.every((exercise) => exercise.name !== "Choose exercise")) {
    throw "You haven't chosen every exercise's name"
  }

}

export { validateRegisterCredentials, validateUserDetails, validateWorkout, validateSignInCredentials };
