import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

//Styles
import './App.scss';

//Api
import { getUsers, removeUser } from './api/users';

//Components
import Header from "./components/Header/Header";
import DeleteButton from "./components/DeleteButton/DeleteButton";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const deleteUser = (id) => {
    removeUser(id).then(() => getUsers().then(setUsers));
  };

  return (
    <div>
      <Header />

      <main>
        <h1>Users management</h1>
        <h2>List of users</h2>
        <ul className="list">
          {users.map(user => (
            <li className="list__item" key={user.id}>
              <Link to={`/user/${user.id}`}>
                <h3>{user.first_name} {user.last_name}</h3>
                <span>Gender: {user.gender}</span>
                <span>Birth date: {user.birth_date}</span>
              </Link>

              <DeleteButton handleClick={() => deleteUser(user.id)} />
            </li>
          ))}
        </ul>

        <Link to="/new_user" className="addUser">+</Link>
      </main>
    </div>
  );
}

export default App;
