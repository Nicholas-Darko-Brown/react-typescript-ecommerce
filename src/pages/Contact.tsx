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
        {/* <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=koforidua&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embedmapgenerator.com/">embed google maps in website</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div> */}
        <iframe src="https://maps.google.com/maps?hl=en&amp;q=koforidua&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{width: "100%", height: "70vh"}} className="map" loading="lazy" title="myFrame"></iframe>

    </section>
  )
}

export default Contact