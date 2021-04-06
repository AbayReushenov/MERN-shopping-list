/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// {18:27}
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => ({
  type: GET_ITEMS,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
