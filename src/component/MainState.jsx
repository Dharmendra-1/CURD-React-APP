import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContent from './listContent';
import InputForm from './InputForm';

const NameOfContext = createContext();
const SetNameContext = createContext();
const LocationOfContext = createContext();
const SetLocationContext = createContext();
const NumberOfContext = createContext();
const setNumberContetxt = createContext();
const ListOfData = createContext();
const SetListData = createContext();
const SubmitContext = createContext();
const ToggleContext = createContext();
const SetToggleContext = createContext();
const EditDataContext = createContext();
const SetEditData = createContext();

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
    <NameOfContext.Provider value={name}>
      <SetNameContext.Provider value={setName}>
        <LocationOfContext.Provider value={location}>
          <SetLocationContext.Provider value={setLocation}>
            <NumberOfContext.Provider value={number}>
              <setNumberContetxt.Provider value={setNumber}>
                <ListOfData.Provider value={listData}>
                  <SetListData.Provider value={setListData}>
                    <SubmitContext.Provider value={submitForm}>
                      <ToggleContext.Provider value={toggle}>
                        <SetToggleContext.Provider value={setToggle}>
                          <EditDataContext.Provider value={editId}>
                            <SetEditData.Provider value={setEditId}>
                              <InputForm />
                              <ListContent />
                            </SetEditData.Provider>
                          </EditDataContext.Provider>
                        </SetToggleContext.Provider>
                      </ToggleContext.Provider>
                    </SubmitContext.Provider>
                  </SetListData.Provider>
                </ListOfData.Provider>
              </setNumberContetxt.Provider>
            </NumberOfContext.Provider>
          </SetLocationContext.Provider>
        </LocationOfContext.Provider>
      </SetNameContext.Provider>
    </NameOfContext.Provider>
  );
};

export default InputFormMain;
export {
  NameOfContext,
  SetNameContext,
  LocationOfContext,
  SetLocationContext,
  NumberOfContext,
  setNumberContetxt,
  ListOfData,
  SetListData,
  SubmitContext,
  ToggleContext,
  SetToggleContext,
  EditDataContext,
  SetEditData,
};
