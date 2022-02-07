import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from "react-router-dom";
import App from './App';

//Styles
import './index.scss';

//Routes
import UserInfo from "./routes/UserInfo/UserInfo";
import EditUser from "./routes/EditUser";
import AddUser from "./routes/AddUser";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="user/:userId" element={<UserInfo />} />
        <Route path="user/:userId/edit" element={<EditUser />} />
        <Route path="/new_user" element={<AddUser />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
