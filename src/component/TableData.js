import React from 'react';

const TableData = ({
  obj,
  listData,
  setListData,
  setName,
  setLocation,
  setNumber,
  setAadhar,
  setToggle,
  setEditId,
}) => {
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
    setAadhar(editData.aadhar);
    setEditId(id);
  };

  return (
    <>
      <td>{obj.name}</td>
      <td>{obj.location}</td>
      <td>{obj.number}</td>
      <td>{obj.aadhar}</td>
      <td>
        <button className='btn btn-primary' onClick={() => editItem(obj.id)}>
          Edit
        </button>
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => deleteItem(obj.id)}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TableData;
