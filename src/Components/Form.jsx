import React from 'react';
import Navbar from './Navbar'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mrgwzjwl');
  if (state.succeeded) {
    return (
      <p className='text-xl font-medium font-quicksand flex justify-center text-center my-24 text-[#c94b60]'>
        Thanks for Contacting.<br /> We will get back to you as soon.
      </p>
    );
  }

  return (
    <div className='my-16'>
      <h1 className="flex text-2xl font-semibold items-center justify-center font-montserrat mx-4 text-[#c94b60]">Get In Touch For Bookings/ Enquiries</h1>
      <h2 className="flex text-lg font-base items-center justify-center mb-8 mt-1 font-raleway mx-4 text-[#c94b60]">Send us a message to book or for more info.</h2>
      <div className="flex justify-center mx-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md font-montserrat">
          <div className="mb-4 ">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required // Add the 'required' attribute
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
              required // Add the 'required' attribute
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
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Location"
              field="location"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="datetime" className="block mb-2 whitespace-nowrap">
              Date & Time
            </label>
            <input
              id="datetime"
              type="text"
              name="datetime"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <a href='https://outlook.office365.com/calendar/published/69ed4b427f8044158b0d66b7d0b0734c@smilebooth360.com/afc8f4b7a348459aa6c209820b7509a14482848494026871874/calendar.html' target="_blank" rel="noopener noreferrer">
              <span className="hover:bg-[#ad345c] bg-[#c94b60] text-white font-semibold font-montserrat py-2 px-4 rounded whitespace-nowrap">
                Check Availability
              </span>
            </a>
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
              required // Add the 'required' attribute
            />
            <ValidationError
              prefix="Event Type"
              field="eventType"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          {/* Dropdown menu with 4 options */}
          <div className="mb-4">
            <label htmlFor="extraInfo" className="block mb-2">
              Duration:
            </label>
            <select
              id="extraInfo"
              name="extraInfo"
              className="w-full p-2 border border-gray-300 rounded" // Add the 'required' attribute if needed
            >
              <option value="">Select an option</option>
              <option value="2 Hours">2 Hours</option>
              <option value="4 Hours">4 Hours</option>
            </select>
            <ValidationError
              prefix="Option"
              field="extraInfo"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          {/* Text box for extra information */}
          <div className="mb-4">
            <label htmlFor="extraTextBox" className="block mb-2">
              Extra Information or Add-ons
            </label>
            <textarea
              id="extraTextBox"
              name="extraTextBox"
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
               // Add the 'required' attribute if needed
            />
            <ValidationError
              prefix="Extra Information"
              field="extraTextBox"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="hover:bg-[#ad345c] bg-[#c94b60] text-white font-semibold font-montserrat py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;