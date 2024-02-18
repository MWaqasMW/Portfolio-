"use client"



import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong while adding user');
      }

      const data = await response.json();
      console.log('User added:', data.user);
      // Do something with the added user data
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
