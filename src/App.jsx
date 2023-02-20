import { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './componets/UserForm'
import UsersList from './componets/UsersList'
import './styles/UserForm.css'
import './styles/User.css'
import './App.css'

function App() {
  const [dataUsers, setDataUsers] = useState([])
  const [userInfo, setUserInfo] = useState()
  const [showForm, setShowForm] = useState(false)
  const BASEURL = 'https://users-crud.academlo.tech/'
  
  console.log(showForm)
  // {Peticion POST: Create user}
  const createUser = data => {
      const url = `${BASEURL}users/`
      axios.post(url, data)
        .then(res => {
          console.log(res.data)
          showUser()
        })
        .catch(err => err)
  }

  // {Peticion GET: Show user}
  const showUser = () => {
    const url = `${BASEURL}users/`
      axios.get(url)
        .then(res => setDataUsers(res.data))
        .catch(err => err)
  }
  
//  {Peticion UPDATE: Update user}
const updateUser = (data, id) => {
  const url = `${BASEURL}users/${id}/`
  axios.patch(url, data)
    .then(res => {
      console.log(res.data)
      showUser()
    })
    .catch(err => err)
}

// {Peticion DELETE: Delete user}
const deleteUser = (id) => {
  const url = `${BASEURL}users/${id}/`
  axios.delete(url)
    .then(res => {
      console.log(res.data)
      showUser()
    })
    .catch(err => err)
}

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>Users CRUD</h1>
        <button className='header__btn' onClick={() => setShowForm(true)} >New User</button>
        <i onClick={() => setShowForm(true)} class='bx bx-user-plus'></i>
      </header>
      <main className='container'>
        <section className={`container__form ${showForm? 'showForm':'hideForm'}`}><UserForm 
        updateUser={updateUser} 
        userInfo={userInfo} 
        createUser={createUser} 
        setUserInfo={setUserInfo}
        setShowForm={setShowForm}
        /></section>
        <section className='container__listUsers'><UsersList 
        setUserInfo={setUserInfo} 
        dataUsers={dataUsers} 
        deleteUser={deleteUser}
        setShowForm={setShowForm}
        /></section>
      </main>
    </div>
  )
}

export default App
