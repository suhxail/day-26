import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import ProfilePage from './components/ProfilePage'
import EditUsers from './components/EditUsers'
import EditProfile from './components/EditProfile'

function App() {

  const user = [{
    id: "1",
    name: "suhail",
    email: "suhail@gmail.com",
    contactNumber: "1234567890",
    address:"123,street,city,state,country.",    
  }]

  const [viewUser, setViewUser] = useState(user)
  const [userList, setUserList] = useState([...user])
  const [currentUser, setCurrentUser] = useState()
  const [index, setIndex] = useState()

  const viewProfile = (user) => {
    setViewUser(user)
  } 

  const EditUser = (user, index) => {
    setCurrentUser(user)
    setIndex(index)
    console.log(user);   
  }

  // const EditProfile = (viewUser,index) => {
  //   setCurrentUser(viewUser);
  //   setIndex(index);
  //   console.log(viewUser); 
  // }

  const UpdateUser = (updatedUser, id) => {
    console.log(updatedUser);
    const UserList = [...userList]
    console.log(id);
    UserList[id] = { ...updatedUser }
    setUserList([...UserList])
  }; 

  const UpdateProfile = (updatedProfile,id) =>{
    console.log(UpdateProfile)
    const UserList = [...userList]
    console.log(id);
    UserList[id] = { ...updatedProfile }
    setUserList([...UserList])
  }

  const Adduser=(user)=>{
    let newUser = {...user}
    newUser.id = userList.length + 1
    setUserList([...userList,newUser])
    console.log(userList);
  };

  const DeleteUser = (id) => {
    const UserList = [...userList]
    const newUser = UserList.filter((user, index) => index !== id)
    setUserList(newUser)
  };



  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard userList={userList} viewProfile={viewProfile}/>} />
          <Route path='/profile/:id' element={<ProfilePage user={user} viewUser={viewUser} EditUser={EditUser} index={index} />} />
          <Route path='/edit-user/:id' element={<EditUsers currentUser={currentUser} index={index} UpdateUser={UpdateUser} user={user} />} />
          <Route path='/edit-profile/:id' element={<EditProfile index={index} UpdateUser={UpdateUser} user={user} viewUser={viewUser} />} />
          <Route path="/create-user" element={<CreateUser currentUser={currentUser} index={index} UpdateUser={UpdateUser} Adduser={Adduser} user={user} />} />
          <Route path='/users' element={<UserList EditUser={EditUser} userList={userList} index DeleteUser={DeleteUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App