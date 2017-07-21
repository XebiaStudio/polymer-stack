import friendListReducer from './friend-list-reducer';

const initialState = [];

describe('friendListReducer', () => {
  it('can add a friend', () => {
    const newState = friendListReducer(initialState, {
      type: 'ADD_FRIEND',
      friend: 'Test',
    });

    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual('Test');
  });

  it('can gracefully ignore unknown actions', () => {
    const newState = friendListReducer(initialState, {
      type: 'NONEXISTENT',
    });

    expect(newState).toEqual(initialState);
  });
});
