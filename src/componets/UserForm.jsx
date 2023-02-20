import React, { useRef, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import '../styles/UserForm.css'

const UserForm = ({userInfo, setShowForm, setUserInfo, updateUser, createUser}) => {
    const {register, handleSubmit, reset} = useForm()
    
   
    const userReset = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }
    
    const submit = data => {
        if(userInfo){
        console.log(data)
        updateUser(data, userInfo.id)
        setUserInfo('')
        }else{
        createUser(data)
        }
        reset(userReset)
    }

    useEffect(() => {
        if(userInfo)
        reset(userInfo)
    }, [userInfo])

  return (
    <form  className='form'  onSubmit={handleSubmit(submit)}>
        <article className='form__header'>
            <h2 className='form__header__title'>{`${userInfo?'Update User':'New User'}`}</h2>
            <div className='contaniner__x'><i onClick={() => setShowForm(false)} className='bx bx-x'></i></div>
        </article>
        <article className='form__data'>
            <div  className='form__data__cont'>
            <i class='bx bx-user' ></i>
            <input type="text" name='first_name' {...register('first_name')} placeholder='Enter first name'/>
            </div>
            <input type="text" className='last_name' name='last_name' {...register('last_name')} placeholder='Last name' />
            <div className='form__data__cont'><i class='bx bx-key'></i><input type="password" name='password' {...register('password')} placeholder='Password'/> </div>
            <div className='form__data__cont'><i class='bx bxs-cake' ></i><input type="date" name='birthday' {...register('birthday')} placeholder=''/> </div>
            <div className='form__data__cont'><i class='bx bxs-envelope' ></i><input type="email" name='email' {...register('email')} placeholder='Email'/> </div>
        </article>
        <button className='form__btn'>{`${userInfo?'Update':'Create'}`}</button>
    </form>
  )
}

export default UserForm