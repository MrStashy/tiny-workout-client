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

async function createUser(userDetails) {
  const response = await fetch(url + "users/", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(userDetails)
  })
  const json = await response.json()
  return json
}

async function createProfile(userId, stats) {
  const response = await fetch(url + "stats/" + userId.toString(), {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(stats)
  })

  const json = await response.json()
  return json
}


export { getUserByUsername, getUserByEmail, createUser, createProfile};
