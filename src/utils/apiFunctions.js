const url = import.meta.env.VITE_API_URL

async function getUserByUsername(username) {
  const response = await fetch(url + "users/username/" + username);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return false;
}

async function getUserByEmail(email) {
    const response = await fetch(url + "users/email/" + email);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    return false;
  }


export { getUserByUsername, getUserByEmail };
