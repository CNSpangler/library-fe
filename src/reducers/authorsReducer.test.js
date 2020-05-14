describe('habits reducer', () => {
  it('handles ADD_AUTHOR action', () => {
    const state = [];
    const action = addAuthor({
      _id: jf8ds9uj5,
      name: 'Ryan Mehta'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: jf8ds9uj5,
        name: 'Ryan Mehta'
      }
    ]);
  });
});
