import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

export const ContactUs = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t8fd3uj', 'template_lt0zta8', form.current, {
        publicKey: '9RIduKZLoNePiWvvl',
      })
      .then(
        () => {
          setTimeout(()=>{toast.success('Email sent Successfully');
            navigate(from,{replace:true});},1000)
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          navigate(from,{replace:true});
        },
      );
  };

  return (
    <>
    

    <div className='flex h-screen items-center justify-center  '>
            <div className="w-[600px]">
                <div className="modal-box">
                    <form ref={form} method="dialog">
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className='mt-4 space-y-2'>
                            <span>FullName</span>
                            <br />
                            <input type='text'name='from_name' placeholder='Enter your fullname' className='w-80 px-3 border rounded-md outline-none '
                              ></input>
                            <br />
                            
                            
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email'name='from_email' placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none'
                                ></input>
                            <br />
                             
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <input type='text' name='message' placeholder='feel free to message' className='w-80 px-3 py-1 border rounded-md outline-none'
                                ></input>
                            <br />
                            
                        </div>
                        <div className='flex justify-around mt-4'>
                            {/* <Link to="/" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                             onClick={()=>e.target.value(console.log(e))}>Submit</Link> */}
                             {/* <input type="submit" value="Send" /> */}
                             <Link to="/"  onClick={sendEmail} type='submit' value="send" className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Send</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

  );
};