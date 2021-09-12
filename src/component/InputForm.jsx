import React, { useContext, useReducer, createContext } from 'react';
import { mainContext } from './MainState';
import { ActionType } from '../reducer/action-type';
import { PersonReducer } from '../reducer/reducer';
import { v4 as uuidv4 } from 'uuid';
import ListContent from './listContent';

const formContext = createContext();

const InputForm = () => {
  const {
    editId,
    name,
    location,
    number,
    toggle,
    setName,
    setLocation,
    setNumber,
    setToggle,
  } = useContext(mainContext);

  const [{ person }, dispatch] = useReducer(PersonReducer, { person: [] });

  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !location || !number) {
      alert('Please Fill Proper Form..');
    } else if (name && location && number && !toggle) {
      const updateData = { editId, name, location, number };
      dispatch({ type: ActionType.UPDATE_PERSON, updateData });
      setToggle(true);
      setName('');
      setLocation('');
      setNumber('');
    } else {
      let uuid = uuidv4();
      let person = { id: uuid, name, location, number };
      dispatch({ type: ActionType.SET_PERSONS, person });
      setName('');
      setLocation('');
      setNumber('');
    }
  };

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
          <button className='btn btn-success'>Submit</button>
        ) : (
          <button className='btn btn-primary'>update</button>
        )}
      </form>

      <formContext.Provider value={{ person, dispatch }}>
        <ListContent />
      </formContext.Provider>
    </div>
  );
};

export default InputForm;
export { formContext };
