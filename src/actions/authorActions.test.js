describe('author actions', () => {
  it('creates an ADD_AUTHOR action', () => {
    const action = addAuthor({
      _id: 'jdks5u0',
      name: 'Ryan Mehta'
    });

    expect(action).toEqual({
      _id: 'jdks5u0',
      name: 'Ryan Mehta'
    });
  });
});
