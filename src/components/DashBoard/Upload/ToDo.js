import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './Upload.css'

const ToDo = () => {
  const { register, handleSubmit, reset , formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res => res.json())
    .then(result =>{
      if(result.success){
        const img = result.data.url;
        const services = {
          servicesHeader:data.servicesHeader,
          servicesDescription:data.servicesDescription,
          img:img
        }
        // send services data to database
        fetch('http://localhost:5000/services',{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(services)
        })
        .then(res=>res.json())
        .then(inserted =>{
          if(inserted.acknowledged){
            Swal.fire(
              'services add success',
              '',
              'success'
            )
            reset();
          }
        })
        // console.log(services);
      }
    })
  }
  return (
    <div>
      <div id="services-content" className='rounded'>
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4" >Add Services</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="servicesHeader" className="text-slate-600">Services Header</label>
              <input id="servicesHeader" name="servicesHeader" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Header "
                {...register("servicesHeader", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                }
                )}
              />
              <label className="">
                {errors.servicesHeader?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.servicesHeader.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="servicesDescription" className="text-slate-600">Services Description</label>
              <input id="servicesDescription" name="servicesDescription" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Description "

                {...register("servicesDescription", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.servicesDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.servicesDescription.message}
                  </span>
                )}
              </label>
            </div>
            <div className='pb-4'>
              <label htmlFor="image" className="text-slate-600">Services photos</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default ToDo;