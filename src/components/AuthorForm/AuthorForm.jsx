import React from 'react';

const AuthorForm = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <input type="name" value={} onChange={({target}) => setName(target.value)} placeholder="Author Name" />
    </form>
  );
};

AuthorForm.propTypes = {};

export default AuthorForm;
