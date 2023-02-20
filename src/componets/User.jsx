import React from 'react'
import '../styles/User.css'

const User = ({dataUser, setUserInfo, setShowForm, deleteUser}) => {

    const handleInforUser = () => {
        setUserInfo(dataUser) 
        setShowForm(true)
    }

    const handleDeleteUser = () => {
        deleteUser(dataUser.id)
    }
  return (
    <div className='containerUser'>
        <h2 className='containerUser__name'>{`${dataUser?.first_name} ${dataUser?.last_name}`}</h2>
        <p className='containerUser__email'>{`${dataUser?.email}`}</p>
        <p className='containerUser__date'>{`${dataUser?.birthday}`}</p>
        <div className='containerUser__btns'>
            <i className='bx bx-trash btnU' onClick={handleDeleteUser} ></i>
            <i className='bx bx-edit-alt' onClick={handleInforUser}></i>
        </div>
    </div>
  )
}

export default User