import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
        <div className=' flex h-screen items-center justify-center '>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h1 className=' font-semibold text-lg '>Contact Us</h1>
            <div className=" mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input 
                type="text"
                placeholder='Enter your name'
                className=" w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                <br />
            </div>
            <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input 
                type="email"
                placeholder='Email address'
                className=" w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                <br />
            </div>
            <div className=" mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                required
                placeholder='Type your message'
                className=" w-80 px-3 py-1 border rounded-md outline-none">
                </textarea>
                <br />
            </div>
            <div>
            <button className=" bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                Submit
            </button>
            </div>
          </form>
        </div>
    </>
  )
}

export default Contact
