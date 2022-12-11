
import './App.css';
import './components/component.css';
import { WelcomeComponent } from './components/welcomecomponent';
import { AddUser } from './components/addUser';
import { EditUser } from './components/editUser';
import { DeleteUser } from './components/deleteUser';
import { NotFound } from './components/notfound';
import { Layout } from './layout';
import { Success } from './components/success';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const initialUserList = [
    {
      id: 1,
      userInfo: { userId: "11m240", password: "123456", name: "siva" },
      contactInfo: { mobile: "9500852760", email: "sivaraj2siva@gmail.com" },
      address: {
        line1: "1/35 pudu Street",
        line2: "Palacode, Dharmapuri",
        country: "India",
        pin: 636808
      }
    }, {
      id: 2,
      userInfo: { userId: "11m241", password: "123456", name: "siva" },
      contactInfo: { mobile: "9500852761", email: "sivaraj2siva@gmail.com" },
      address: {
        line1: "1/35 pudu Street",
        line2: "Palacode, Dharmapuri",
        country: "India",
        pin: 636808
      }
    }, {
      id: 3,
      userInfo: { userId: "11m242", password: "123456", name: "siva" },
      contactInfo: { mobile: "9500852762", email: "sivaraj2siva@gmail.com" },
      address: {
        line1: "1/35 pudu Street",
        line2: "Palacode, Dharmapuri",
        country: "India",
        pin: 636808
      }
    }, {
      id: 4,
      userInfo: { userId: "11m243", password: "123456", name: "siva" },
      contactInfo: { mobile: "9500852763", email: "sivaraj2siva@gmail.com" },
      address: {
        line1: "1/35 pudu Street",
        line2: "Palacode, Dharmapuri",
        country: "India",
        pin: 636808
      }
    }, {
      id: 5,
      userInfo: { userId: "11m244", password: "123456", name: "siva" },
      contactInfo: { mobile: "9500852764", email: "sivaraj2siva@gmail.com" },
      address: {
        line1: "1/35 pudu Street",
        line2: "Palacode, Dharmapuri",
        country: "India",
        pin: 636808
      }
    }];

  const [userList, setUserList] = useState(initialUserList);


  useEffect(() => console.log(userList), [userList]);



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomeComponent />} />
        <Route path="create-user" element={<AddUser userList={userList} setUserList={setUserList} />} />
        <Route path="edit-user" element={<EditUser userList={userList} setUserList={setUserList} />} />
        <Route path="delete-user" element={<DeleteUser userList={userList} setUserList={setUserList} />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>

  );
}



export default App;
