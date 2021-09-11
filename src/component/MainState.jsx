import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContent from './listContent';
import InputForm from './InputForm';

const allOfContext = createContext();

const InputFormMain = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [listData, setListData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editId, setEditId] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !location || !number) {
      alert('Please Fill Proper Form');
    } else if (name && location && number && !toggle) {
      setListData((listData) => {
        let listDataOfEdit = listData.map((obj) => {
          if (obj.id === editId) {
            return { ...obj, name, location, number };
          }
          return obj;
        });
        return listDataOfEdit;
      });

      setToggle(true);
      setEditId(null);
      setName('');
      setNumber('');
      setLocation('');
    } else {
      const id = uuidv4();
      let person = { id, name, location, number };
      setListData((listData) => {
        return [...listData, person];
      });
      setName('');
      setLocation('');
      setNumber('');
    }
  };

  return (
    <allOfContext.Provider
      value={{
        name,
        location,
        number,
        listData,
        toggle,
        editId,
        setName,
        setLocation,
        setNumber,
        setEditId,
        setListData,
        setToggle,
        submitForm,
      }}
    >
      <InputForm />
      <ListContent />
    </allOfContext.Provider>
  );
};

export default InputFormMain;
export { allOfContext };
