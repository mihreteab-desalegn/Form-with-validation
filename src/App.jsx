import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css'

export default function MyForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to server)
    console.log(data);
    // Show a success modal
    setIsModalOpen(true);
    // Reset the form
    reset();
  };

  return (
    <div className=" h-[765px]  bg-green-200 flex justify-center items-center max-sm:container max-sm:h-[1000px]">

      <form className="w-[530px] p-10 rounded-xl container bg-white max-sm:w-[320px]" onSubmit={handleSubmit(onSubmit)}>
        {/* ... (other form fields) ... */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Contact Us</h2>
        <div className="flex flex-row justify-between max-sm:flex-col">
          <div className="mb-4 ">
            <label htmlFor="firstname">First Name<span className="text-green-600">*</span></label><br />
            <input
              type="text"
              id="firstname"
              {...register('firstname', { required: true })}
              className="w-[210px] border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 outline-0 max-sm:w-[250px] "
            />
            {errors.firstname && <p className="text-red-500">This field is required</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="lastname">Last Name<span className="text-green-600">*</span></label><br />
            <input
              type="text"
              id="firstname"
              {...register('lastname', { required: true })}
              className="w-[210px]  border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 outline-0  max-sm:w-[250px]"
            />
            {errors.firstname && <p className="text-red-500">This field is required</p>}
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="email">Email Address<span className="text-green-600">*</span></label><br />
          <input
            type="text"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}

            className="w-[450px]  border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 outline-0 max-sm:w-[250px]"
          />
          {errors.email && <p className="text-red-500">Please enter a valid email address</p>}

        </div>


        <div className="mb-4">
          <p className="my-3">Query Type<span className="text-green-600">*</span></p>
          <div className="flex justify-between max-sm:flex-col">
            <label className="w-[210px] px-2 border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 bg-green-200 accent-green-900 outline-0 max-sm:w-[250px]">
              <input
                type="radio"
                value="generalenquiry"
                {...register('quiry', { required: true })}
                className="mr-3"
              />
              General Enquiry
            </label>
            <label className="w-[210px] border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 bg-green-200 accent-green-900 outline-0 max-sm:w-[250px] max-sm:mt-4">
              <input
                className="mr-3"
                type="radio"
                value="supportrequest"
                {...register('quiry', { required: true })}
              />
              Support Request
            </label><br />

          </div>
          {errors.quiry && <p className="text-red-500">Please select a query type</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message">Message<span className="text-green-600">*</span></label><br />
          <textarea
            type="text"
            id="massage"
            {...register('message', { required: true })}

            className="w-[450px] font-light border p-2 rounded-md border-gray-900 hover:border-green-600 focus:border-green-600 outline-0 max-sm:w-[250px] max-sm:h-50"
          ></textarea>
          {errors.message && <p className="text-red-500">This field is required</p>}

        </div>


        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              className="focus:accent-green-900 mr-4"

              {...register('terms', { required: true })}
            />
            I consent to being contacted by the team <span className="text-green-600">*</span>
          </label>
          {errors.terms && <p className="text-red-500">To submit this form, please consent to being contacted</p>}
        </div>

        <button type="submit" className="bg-green-900 text-white px-4 py-2 w-[450px]  border p-2 rounded-md max-sm:w-[250px]">
          Submit
        </button>
      </form>



      {/* Success modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex  h-[150px] justify-center top-3">
          <div className="bg-green-900 p-4 rounded shadow-md">
            <i class="fa-regular fa-xmark float-right  text-white"
              onClick={() => setIsModalOpen(false)}
            ></i>
            <p className="text-white text-lg font-semibold mt-5"><i className="fa fa-check-circle mr-3"></i> Message Sent!</p>
            <p className="text-white text-sm font-semibold mt-5">Thanks for completing the form. We'll be in touch soon!</p>




          </div>
        </div>
      )
      }
    </div >
  );
}
