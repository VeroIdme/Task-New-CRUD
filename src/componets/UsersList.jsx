import React from 'react'
import User from './User'

const UsersList = ({dataUsers, setShowForm, setUserInfo, deleteUser}) => {
  return (
    <ul className='containerUsers'>
        {
            dataUsers.map(dataUser => (
                <li key={dataUser.id}><User 
                setUserInfo={setUserInfo} 
                deleteUser={deleteUser} 
                dataUser={dataUser}
                setShowForm={setShowForm} /></li>
            ))
        }
    </ul>
  )
}

export default UsersList