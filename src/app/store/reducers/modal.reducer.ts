import { Action, createReducer, on } from '@ngrx/store';
import { OPEN, CLOSE } from '../constants/constants';

const initialPopupState = false;

export const modalReducer = (state = initialPopupState, action: Action) => {
  // console.log(action.type, state);
  switch (action.type) {
    case OPEN: {
      return (state = true);
    }
    case CLOSE: {
      return (state = false);
    }
    default: {
      return state;
    }
  }
};
