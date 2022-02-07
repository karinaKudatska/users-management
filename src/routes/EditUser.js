import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

//Api
import {getUserInfo, editUserInfo} from "../api/users";

//Components
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";

export default function EditUser() {
  let params = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserInfo(params.userId).then(setUser);
  }, [params.userId]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'is_active') {
      setUser({
        ...user,
        [name]: checked
      })
    } else {
      setUser({
        ...user,
        [name]: value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editUserInfo(params.userId, user).then(() => navigate(`/user/${params.userId}`))
  }

  return (
    <div>
      <Header />

      <main>
        {user &&
          <Form user={user} onSubmit={handleSubmit} onChange={handleChange} />
        }
      </main>
    </div>
  );
}