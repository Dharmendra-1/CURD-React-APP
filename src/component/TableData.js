import React, { useContext } from 'react';
import {
  SetNameContext,
  SetLocationContext,
  setNumberContetxt,
  ListOfData,
  SetListData,
  SetToggleContext,
  SetEditData,
} from './MainState';

const TableData = () => {
  const setName = useContext(SetNameContext);
  const setLocation = useContext(SetLocationContext);
  const setNumber = useContext(setNumberContetxt);
  const setToggle = useContext(SetToggleContext);
  const setListData = useContext(SetListData);
  const listData = useContext(ListOfData);
  const setEditId = useContext(SetEditData);

  const deleteItem = (id) => {
    let deletedData = listData.filter((obj) => obj.id !== id);
    setListData(deletedData);
  };

  const editItem = (id) => {
    let editData = listData.find((obj) => obj.id === id);
    setToggle(false);
    setName(editData.name);
    setLocation(editData.location);
    setNumber(editData.number);
    setEditId(id);
  };

  return (
    <>
      {listData.map((obj) => {
        const { name, location, number } = obj;
        return (
          <tr>
            <td>{name}</td>
            <td>{location}</td>
            <td>{number}</td>
            <td>
              <button
                className='btn btn-primary'
                onClick={() => editItem(obj.id)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className='btn btn-danger'
                onClick={() => deleteItem(obj.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableData;
