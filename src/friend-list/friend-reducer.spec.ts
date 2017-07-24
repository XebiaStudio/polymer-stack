import { FriendState, default as friendListReducer } from './friend-reducer';
import { addFriend } from './actions';

const initialState: FriendState = [];

describe('friendReducer', () => {
  it('can add a friend', () => {
    const newState: FriendState = friendListReducer(initialState, addFriend({
      name: 'Test'
    }));

    expect(newState).toHaveLength(1);
  })
});
