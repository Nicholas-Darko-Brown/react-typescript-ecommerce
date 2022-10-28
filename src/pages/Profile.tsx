import React from 'react';
import "../styles/Profile.css"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const Profile = () => {
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    api().post(`create-accounts`, data).then(res => {
      if (res.data.status) {
        navigate('/store')
      } else {
        console.log(res);
      }
    }).catch(error => {
      console.log('error', error);
    })
  };

  return (
    <div>
      <div className='display-name'>
        <div className='name'>
          <h1>Sign up as a member of mother care</h1>
        </div>
        <div className="">
          <button className='sign-out'>Sign Out</button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="profile-container">
        <h3 className='sign-up'>Sign Up</h3>
        <input type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80 })} autoFocus />
        <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        <textarea {...register("address")} placeholder="Address" />
        <input type="tel" placeholder="Mobile number" {...register("mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />
        <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} />
        <input className='submit-btn' type="submit" />
      </form>
    </div>
  );
}

export default Profile