import React, { useContext } from 'react';
import {
  NameOfContext,
  SetNameContext,
  LocationOfContext,
  SetLocationContext,
  NumberOfContext,
  setNumberContetxt,
  SubmitContext,
  ToggleContext,
} from './MainState';

const InputForm = () => {
  const name = useContext(NameOfContext);
  const location = useContext(LocationOfContext);
  const number = useContext(NumberOfContext);
  const submitForm = useContext(SubmitContext);
  const setName = useContext(SetNameContext);
  const setLocation = useContext(SetLocationContext);
  const setNumber = useContext(setNumberContetxt);
  const toggle = useContext(ToggleContext);

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
