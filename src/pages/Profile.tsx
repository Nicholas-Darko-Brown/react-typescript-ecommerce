import React from 'react';
import "../styles/Profile.css"
import { useForm } from 'react-hook-form';

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <div>
        <div className='display-name'>
            <div className='name'>
                <h1>Kofi Mensah</h1>
            </div>
            <div className="">
                <button className='sign-out'>Sign Out</button>
            </div>
        </div>
    <form onSubmit={handleSubmit(onSubmit)} className="profile-container">
      <h3 className='sign-up'>Sign Up</h3>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} autoFocus />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea {...register("address")} placeholder="Address" />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input className='submit-btn' type="submit" />
    </form>
    </div>
  );
}

export default Profile