import actionCreatorFactory from 'typescript-fsa';
import { Friend } from './app-state';

const actionCreator =  actionCreatorFactory();

export const AddFriend = actionCreator<{friend: Friend}>('ADD_FRIEND');
