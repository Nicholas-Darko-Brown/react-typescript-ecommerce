import React from 'react'

const Tabs = () => {
  return (
    <>
    <ul className="nav nav-pills nav-justified flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
  id="pills-tabJustify" role="tablist">
  <li className="nav-item flex-grow text-center my-2 md:mr-2" role="presentation">
    <a href="#pills-homeJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      focus:outline-none focus:ring-0
      active
    " id="pills-home-tabJustify" data-bs-toggle="pill" data-bs-target="#pills-homeJustify" role="tab"
      aria-controls="pills-homeJustify" aria-selected="true">Home</a>
  </li>
  <li className="nav-item flex-grow text-center my-2 md:mx-2" role="presentation">
    <a href="#pills-profileJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      focus:outline-none focus:ring-0
    " id="pills-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#pills-profileJustify" role="tab"
      aria-controls="pills-profileJustify" aria-selected="false">Much longer nav link</a>
  </li>
  <li className="nav-item flex-grow text-center my-2 md:ml-2" role="presentation">
    <a href="#pills-contactJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      focus:outline-none focus:ring-0
    " id="pills-contact-tabJustify" data-bs-toggle="pill" data-bs-target="#pills-contactJustify" role="tab"
      aria-controls="pills-contactJustify" aria-selected="false">Contact</a>
  </li>
  <li className="nav-item flex-grow text-center my-2 md:ml-2" role="presentation">
    <a href="#pills-contactJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      focus:outline-none focus:ring-0
    " id="pills-contact-tabJustify" data-bs-toggle="pill" data-bs-target="#pills-contactJustify" role="tab"
      aria-controls="pills-contactJustify" aria-selected="false">Contact</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContentJustify">
  <div className="tab-pane fade show active" id="pills-homeJustify" role="tabpanel"
    aria-labelledby="pills-home-tabJustify">
    Tab 1 content justify
  </div>
  <div className="tab-pane fade" id="pills-profileJustify" role="tabpanel" aria-labelledby="pills-profile-tabJustify">
    Tab 2 content justify
  </div>
  <div className="tab-pane fade" id="pills-contactJustify" role="tabpanel" aria-labelledby="pills-contact-tabJustify">
    Tab 3 content justify
  </div>
</div>
</>
  )
}

export default Tabs