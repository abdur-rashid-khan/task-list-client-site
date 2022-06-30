import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddReview = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>
      <div id="services-content" className='rounded'>
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4" >Add Review</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="name" className="text-slate-600">Your Name</label>
              <input id="name" name="name" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Your Name "
                {...register("name", {
                  required: {
                    value: true,
                    message: "please type name",
                  },
                }
                )}
              />
              <label className="">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="location" className="text-slate-600">Services Description</label>
              <input id="location" name="location" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here location "

                {...register("location", {
                  required: {
                    value: true,
                    message: "please type your location",
                  },

                }
                )}
              />
              <label className="">
                {errors.location?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.location.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="review" className="text-slate-600">Type Here</label>
              <textarea id="review" name="review" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="What is your comment on my project"
                cols="30" rows="5"
                {...register("review", {
                  required: {
                    value: true,
                    message: "please type  review",
                  },

                }
                )}
              />
              <label className="">
                {errors.review?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>
            <div className='pb-4'>
              <label htmlFor="image" className="text-slate-600">Your photos</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "enter your photos",
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

export default AddReview;