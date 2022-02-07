const BASE_URL = 'https://frontend-candidate.dev.sdh.com.ua/v1/contact/';

export const getUsers = async() => {
  const users = await fetch(BASE_URL);

  return users.json()
};

export const removeUser = async(userId) => {
  await fetch(
    `${BASE_URL}/${userId}`,
    { method: 'DELETE' },
  );
};

export const getUserInfo = async(userId) => {
  const user = await fetch(`${BASE_URL}/${userId}`);

  return user.json()
};

export const editUserInfo = async(userId, data) => {
  await fetch(
    `${BASE_URL}/${userId}`,
    {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    },
  )
};

export const addUser  = async(user) => {
  await fetch(
    BASE_URL,
    {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user),
    },
  )
};
