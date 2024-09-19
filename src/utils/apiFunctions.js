const url = import.meta.env.VITE_API_URL

async function getUserByUsername(username) {
  const response = await fetch(url + "users/username/" + username, {
    headers: {
      'Authorization': "Bearer " + localStorage.getItem('Token')
    }
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }

  return false;
}

async function getUserByEmail(email) {
    const response = await fetch(url + "users/email/" + email, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('Token')
      }
    });
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
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem('Token') 
    },
    body: JSON.stringify(stats)
  })
  const json = await response.json()
  return json
}

async function getNamedExercisesByUserId (userId, exercise) {
  const response = await fetch(url + "exercises/" + userId + "/" + exercise, {
    headers: {
      'Authorization': "Bearer " + localStorage.getItem('Token')
    }
  })
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return false;
}

async function getAllExerciseNamesByUserId (userId) {
  const response = await fetch(url + "exercises/" + userId, {
    headers: {
      'Authorization': "Bearer " + localStorage.getItem('Token')
    }
  })
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return false;
}

async function submitWorkout (userId, workout) {
  const response = await fetch(url + "workouts/" + userId, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem('Token')
    },
    body: JSON.stringify(workout)
  })
  
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return false
}

async function getWorkoutsByIdPaginated(userId, pageNo, perPage) {
  const response = await fetch(url + "workouts/paginated/" + userId + `?perPage=${perPage}&pageNo=${pageNo}`, {
    headers: {
      'Authorization': "Bearer " + localStorage.getItem('Token')
    }
  })

  if (response.ok) {
    const json = await response.json();
    return json
  }
  return false
}

async function login (userDetails) {
  const response = await fetch(url + "login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(userDetails)
      })

      if(!response.ok) {
        throw "Log in failed"
      }

      const { token } = await response.json()
      localStorage.setItem('Token', token)
}


export { getUserByUsername, getUserByEmail, createUser, createProfile, getNamedExercisesByUserId, getAllExerciseNamesByUserId, submitWorkout, getWorkoutsByIdPaginated, login };
