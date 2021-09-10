import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContent from './listContent';
import InputForm from './InputForm';

const InputFormMain = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [listData, setListData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editId, setEditId] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !location || !number || !aadhar) {
      alert('Please Fill Proper Form');
    } else if (name && location && number && aadhar && !toggle) {
      setListData((listData) => {
        let listDataOfEdit = listData.map((obj) => {
          if (obj.id === editId) {
            return { ...obj, name, location, number, aadhar };
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
      setAadhar('');
    } else {
      const id = uuidv4();
      let person = { id, name, location, number, aadhar };
      setListData((listData) => {
        return [...listData, person];
      });
      setName('');
      setLocation('');
      setNumber('');
      setAadhar('');
    }
  };

  return (
    <div className='container'>
      <InputForm
        toggle={toggle}
        name={name}
        location={location}
        number={number}
        aadhar={aadhar}
        setName={setName}
        setLocation={setLocation}
        setNumber={setNumber}
        setAadhar={setAadhar}
        setEditId={setEditId}
        submitForm={submitForm}
      />
      <ListContent
        listData={listData}
        setListData={setListData}
        setName={setName}
        setLocation={setLocation}
        setNumber={setNumber}
        setAadhar={setAadhar}
        setToggle={setToggle}
        setEditId={setEditId}
      />
    </div>
  );
};

export default InputFormMain;
