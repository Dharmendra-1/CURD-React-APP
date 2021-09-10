import React from 'react';

const InputForm = ({
  toggle,
  name,
  location,
  number,
  aadhar,
  setName,
  setLocation,
  setNumber,
  setAadhar,
  submitForm,
}) => {
  return (
    <div className='container'>
      <form action='form-control' className='form' onSubmit={submitForm}>
        <input
          type='text'
          name='name'
          placeholder='Enter your full name..'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          name='Location'
          placeholder='Enter Your Location..'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type='number'
          name='accNumber'
          placeholder='Enter Your Account Numbers..'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type='number'
          name='aadharNumber'
          placeholder='Enter Your Aadhar Numbers..'
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
        {toggle ? (
          <button class='btn btn-success'>Submit</button>
        ) : (
          <button class='btn btn-primary'>update</button>
        )}
      </form>
    </div>
  );
};

export default InputForm;
