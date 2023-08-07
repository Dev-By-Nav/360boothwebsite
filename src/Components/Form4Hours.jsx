import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mrgwzjwl');

  useEffect(() => {
    if (state.succeeded) {
      window.location.href = 'https://buy.stripe.com/test_fZe29c7P31JZclqaEG';
    }
  }, [state.succeeded]);

  return (
    <div className='my-16'>
      <h1 className="flex text-2xl font-semibold items-center justify-center font-montserrat mx-4 text-[#c94b60]">Book 4 Hours of The 360 Booth</h1>
      <h2 className="flex text-lg font-base items-center justify-center mb-8 mt-1 font-raleway mx-4 text-[#c94b60]">*Please Note* There is a charge on bookings further than 50 miles of PE11</h2>
      <div className="flex justify-center mx-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md font-montserrat">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError
              prefix="Phone Number"
              field="phone"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          {/* Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError
              prefix="Location"
              field="location"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          {/* Date & Time */}
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
          {/* Event Type */}
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-2">
              Event Type
            </label>
            <input
              id="eventType"
              type="text"
              name="eventType"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError
              prefix="Event Type"
              field="eventType"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          {/* Extra Information */}
          <div className="mb-4">
            <label htmlFor="extraTextBox" className="block mb-2">
              Extra Information or Add-ons
            </label>
            <textarea
              id="extraTextBox"
              name="extraTextBox"
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
            />
            <ValidationError
              prefix="Extra Information"
              field="extraTextBox"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          {/* Submit Button */}
          <div className="mb-4">
            <a href='https://buy.stripe.com/test_fZe29c7P31JZclqaEG' target="_blank" rel="noopener noreferrer">
              <span className="hover:bg-[#ad345c] bg-[#c94b60] text-white font-semibold font-montserrat py-2 px-4 rounded">
                <button
                  type="submit"
                  disabled={state.submitting}
                >
                  Continue To Pay Deposit for 4 Hours
                </button>
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;





