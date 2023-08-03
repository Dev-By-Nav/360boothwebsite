import React from 'react';
import Navbar from './Navbar'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mrgwzjwl');
  if (state.succeeded) {
    return <p className='text-xl font-medium font-quicksand flex justify-center text-center my-24'>Thanks for Contacting.<br /> We will get back to you as soon as possible</p>;
  }

  return (
    <div className='my-16'>
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ValidationError
            prefix="Phone Number"
            field="phone"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ValidationError
            prefix="Location"
            field="location"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="datetime" className="block mb-2">
            Date & Time
          </label>
          <input
            id="datetime"
            type="text"
            name="datetime"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ValidationError
            prefix="Date & Time"
            field="datetime"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventType" className="block mb-2">
            Event Type
          </label>
          <input
            id="eventType"
            type="text"
            name="eventType"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ValidationError
            prefix="Event Type"
            field="eventType"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#a1d1ed] hover:bg-[#4aa9e1] text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Form;
