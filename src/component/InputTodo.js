import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const getLocalItems = () => {
  let list = window.localStorage.getItem('bank');
  if (list) {
    return JSON.parse(localStorage.getItem('bank'));
  } else {
    return [];
  }
};

const InputTodo = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [item, setItem] = useState(getLocalItems());
  const [toggle, setToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uuidv4();

    if (!name || !number || !ifsc) {
      alert('Please Fill Proper Data');
    } else if (name && number && ifsc && !toggle) {
      setItem(() => {
        return item.map((ele) => {
          if (ele.id === isEditItem) {
            return { ...ele, name, number, ifsc };
          }
          return ele;
        });
      });

      setToggle(true);
      setName('');
      setNumber('');
      setIfsc('');
      setIsEditItem(null);
    } else {
      let newTodo = { id: uuid, name, number, ifsc };
      setItem((item) => {
        return [...item, newTodo];
      });
    }

    setName('');
    setNumber('');
    setIfsc('');
  };

  const deleteItem = (id) => {
    let deleteData = item.filter((item) => item.id !== id);
    setItem(deleteData);
  };

  const editItem = (id) => {
    let newEditItem = item.find((item) => item.id === id);
    setToggle(false);
    setName(newEditItem.name);
    setNumber(newEditItem.number);
    setIfsc(newEditItem.ifsc);
    setIsEditItem(id);
  };

  useEffect(() => {
    window.localStorage.setItem('bank', JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>BANK ACCOUNT DETAILS</h1>
        <form className='formDetils' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='firstname'
              placeholder='Enter Full Name..'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='accNumber'>Account Num :</label>
            <input
              type='number'
              id='accNumber'
              name='accNumber'
              placeholder='Enter Account Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ifscCode'>IFSC Code :</label>
            <input
              type='text'
              id='ifscCode'
              name='ifscCode'
              placeholder='Enter IFSC Details..'
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
            />
          </div>

          {toggle ? (
            <button className='btn btn-success'>save</button>
          ) : (
            <button className='btn btn-primary'>Edit</button>
          )}
        </form>
      </div>

      <div className='resultData'>
        <table className='table mt-5 text-center'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Number</th>
              <th>IFSC</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {item.map((card) => (
              <tr key={card.id}>
                <td>{card.name}</td>
                <td>{card.number}</td>
                <td>{card.ifsc}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={() => editItem(card.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteItem(card.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InputTodo;
