import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const form = useRef();

  const [data,setData]=useState({
    name:"",
    mobile:"",
    message:""
  })

  const {name,mobile,message}=data

  const changeHandle= e =>{
    setData({...data,[e.target.name]:e.target.value})
  }



  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_0ow2m1b', 'template_r0o1s1s', form.current, {
        publicKey: 'XjwEaM23RIA27-O5l',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Display success message
          window.alert('Your feedback has been successfully submitted!');
          
          // Clear the form fields by resetting state
          setData({
            name: "",
            mobile: "",
            message: ""
          });
  
          // Optionally, reset the actual form HTML
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  
  

  return (
    <section classNames="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1063380.0503440963!2d79.60109451005152!3d18.170728783599383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450bd75e4be7%3A0x9306909c277bc137!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1727504230241!5m2!1sen!2sin"></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Warangal, Telangana, India</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-indigo-500 leading-relaxed">oorugalluruchulu@gmail.com </a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">9110317849</p>
          </div>
        </div>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 border-2 bg-white p-4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Please give your valuable Feedback on our Items.</p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={changeHandle} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="mobile" className="leading-7 text-sm text-gray-600">mobile number</label>
          <input type="number" id="mobile" name="mobile" value={mobile}  onChange={changeHandle} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" value={message}  onChange={changeHandle} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
       
      </form>
     
    </div>
  </section>
  )
}

export default ContactSection