import actionCreatorFactory from 'typescript-fsa';
import { Friend } from '../types';

const actionCreator =  actionCreatorFactory();

export const AddFriend = actionCreator<{friend: Friend}>('ADD_FRIEND');
