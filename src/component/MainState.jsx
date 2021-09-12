import React, { createContext, useState } from 'react';
import InputForm from './InputForm';

const mainContext = createContext();

const InputFormMain = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [editId, setEditID] = useState(null);

  return (
    <mainContext.Provider
      value={{
        editId,
        name,
        location,
        number,
        toggle,
        setName,
        setLocation,
        setNumber,
        setToggle,
        setEditID,
      }}
    >
      <InputForm />
    </mainContext.Provider>
  );
};

export default InputFormMain;
export { mainContext };
