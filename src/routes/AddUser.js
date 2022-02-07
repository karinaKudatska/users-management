import {useNavigate} from "react-router-dom";
import {useState} from "react";

//Api
import {addUser} from "../api/users";

//Components
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    "first_name": "",
    "last_name": "",
    "birth_date": "",
    "gender": "male",
    "job": "",
    "biography": "",
    "is_active": false
  })

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
    addUser(user).then(() => navigate(`/`));
  }

  return (
    <div>
      <Header />

      <main>
        <Form user={user} onSubmit={handleSubmit} onChange={handleChange} />
      </main>
    </div>
  );
}