import React from 'react';
import TableData from './TableData';

const ListContent = () => {
  return (
    <div className='container'>
      <div className='tableForm'>
        <table className='table mt-5 text-center'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <TableData />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListContent;
