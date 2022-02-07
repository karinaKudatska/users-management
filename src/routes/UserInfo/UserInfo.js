import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

//Api
import {getUserInfo, removeUser} from "../../api/users";

//Styles
import './UserInfo.scss'

//Components
import Header from "../../components/Header/Header";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

export default function UserInfo() {
  let params = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserInfo(params.userId).then(setUser);
  }, [params.userId]);

  const deleteUser = (id) => {
    removeUser(id).then(() => navigate(`/`));
  };

  return (
    <div>
      <Header />

      {user &&
        <main>
          <h1>User info:</h1>
          <ul className="userInfo">
            <li>
              <h3>First name:</h3>
              <p>{user.first_name}</p>
            </li>

            <li>
              <h3>Last name:</h3>
              <p>{user.last_name}</p>
            </li>

            <li>
              <h3>Birth date:</h3>
              <p>{user.birth_date}</p>
            </li>

            <li>
              <h3>Gender:</h3>
              <p>{user.gender}</p>
            </li>

            <li>
              <h3>Job:</h3>
              <p>{user.job}</p>
            </li>

            <li>
              <h3>Biography:</h3>
              <p>{user.biography}</p>
            </li>

            <li>
              <h3>Status:</h3>
              <p>{user.is_active ? 'enabled' : 'disabled'}</p>
            </li>
          </ul>

          <Link to={`/user/${params.userId}/edit`} className={"editUser"}>
            Edit user info
            <img src="/edit.png" alt="Edit user info" />
          </Link>

          <DeleteButton handleClick={() => deleteUser(user.id)} />
        </main>
      }
    </div>
  );
}