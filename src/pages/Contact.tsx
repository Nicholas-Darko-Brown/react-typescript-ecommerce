import React from 'react'
import { useForm } from 'react-hook-form';
import "../styles/Contact.css"

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <section>

        <form onSubmit={handleSubmit(onSubmit)} className="profile-container">
          <h3 className='sign-up'>Contact Us</h3>
          <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} autoFocus />
          <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <textarea {...register("address")} placeholder="Message..." />
          <input className='submit-btn' type="submit" value="Send Message" />
        </form>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126804.78720049757!2d-1.6861460632728391!3d6.690251044396785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi!5e0!3m2!1sen!2sgh!4v1658850086144!5m2!1sen!2sgh" style={{width: "100%", height: "70vh"}} className="map" loading="lazy" title="myFrame"></iframe>

    </section>
  )
}

export default Contact