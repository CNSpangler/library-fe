import React, { useState } from 'react';
import { postAuthor } from '../../services/authorsApi';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    postAuthor({name})
      .then(author => {
        // add author to redux
      })
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
