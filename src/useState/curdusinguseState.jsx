import React, { useState, useEffect } from 'react';

export default function CRUDUsingUseState() {
  // State for managing form inputs and stored data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('crudData');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phone) {
        //console.log(Date.now());
      const newData = { id: Date.now(), firstName, lastName, phone };
      const updatedData = [...data, newData];
      //setData([...data, newData]);
      setData(updatedData);
      localStorage.setItem('crudData', JSON.stringify(updatedData));
      setFirstName('');
      setLastName('');
      setPhone('');
    }else{
        alert('Please enter first name, last name and phone');
    }
  };

  // Function to handle delete operation
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // Function to handle update operation
  const handleUpdate = (id) => {
    const item = data.find((item) => item.id === id);
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setPhone(item.phone);
    handleDelete(id); // Remove the item and allow re-submission
  };

  return (
    <div>
      <h2>CRUD Using useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h3>Data List</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName} - {item.phone}
            <button onClick={() => handleUpdate(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}