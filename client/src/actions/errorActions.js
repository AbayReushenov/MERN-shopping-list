import { POLUCHITE_OSHIBKI, OCHISTITE_OSHIBKI } from './types';

// return errors
export const returnErrors = (msg, status, id = null) => {
  return {
    type: POLUCHITE_OSHIBKI,
    payload: { msg, status, id },
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: OCHISTITE_OSHIBKI,
  };
};
