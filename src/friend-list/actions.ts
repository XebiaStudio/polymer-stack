import typescriptFsa from 'typescript-fsa';
import { Friend } from '../types';

const actionCreator = typescriptFsa();

export const addFriend = actionCreator<Friend>('ADD_FRIEND');
