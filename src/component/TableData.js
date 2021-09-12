import React, { useContext } from 'react';
import { mainContext } from './MainState';
import { formContext } from './InputForm';
import { ActionType } from '../reducer/action-type';

const TableData = () => {
  const { setName, setLocation, setNumber, setToggle, setEditID } =
    useContext(mainContext);

  const { person, dispatch } = useContext(formContext);

  const editItem = (id) => {
    let editData = person.find((obj) => obj.id === id);
    const { name, location, number } = editData;
    setToggle(false);
    setName(name);
    setLocation(location);
    setNumber(number);
    setEditID(id);
  };

  return (
    <>
      {person.map((obj) => {
        const { id, name, location, number } = obj;
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{location}</td>
            <td>{number}</td>
            <td>
              <button
                className='btn btn-primary'
                onClick={(e) => {
                  e.preventDefault();
                  editItem(id);
                }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className='btn btn-danger'
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: ActionType.DELETE_PERSON,
                    id,
                  });
                }}
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
