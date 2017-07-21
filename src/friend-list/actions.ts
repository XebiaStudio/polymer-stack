import actionCreatorFactory from 'typescript-fsa';
import { Friend } from '../types';

const actionCreator = actionCreatorFactory();

export const AddFriend = actionCreator<Friend>('ADD_FRIEND');
