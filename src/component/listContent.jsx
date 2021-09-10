import React from 'react';
import TableData from './TableData';

const ListContent = ({
  listData,
  setListData,
  setName,
  setLocation,
  setNumber,
  setAadhar,
  setToggle,
  setEditId,
}) => {
  return (
    <div className='container'>
      <div className='tableForm'>
        <table className='table mt-5 text-center'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Account Number</th>
              <th>Aadhar Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((obj) => {
              return (
                <tr key={obj.id}>
                  <TableData
                    obj={obj}
                    listData={listData}
                    setListData={setListData}
                    setName={setName}
                    setLocation={setLocation}
                    setNumber={setNumber}
                    setAadhar={setAadhar}
                    setToggle={setToggle}
                    setEditId={setEditId}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListContent;
