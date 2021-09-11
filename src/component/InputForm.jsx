import React, { useContext } from 'react';

import { allOfContext } from './MainState';

const InputForm = () => {
  const {
    name,
    location,
    number,
    toggle,
    setName,
    setLocation,
    setNumber,
    submitForm,
  } = useContext(allOfContext);

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
          name='PhoneNumber'
          placeholder='Enter Your Phone Numbers..'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
