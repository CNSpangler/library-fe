import React, { useState } from 'react';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="name" value={name} onChange={({ target }) => setName(target.value)} placeholder="Author Name" />
      <button>Add Author</button>
    </form>
  );
};

AuthorForm.propTypes = {};

export default AuthorForm;
