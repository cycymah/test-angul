import { Action, createReducer, on } from '@ngrx/store';
import {
  OPEN_MAIN,
  CLOSE_MAIN,
  OPEN_FILIAL,
  CLOSE_FILIAL,
} from '../constants/constants';

const initialPopup = { isOpenMain: false, isOpenFilial: false };

export const modalOpenReducer = (state = initialPopup, action: Action) => {
  console.log(action, state);
  switch (action.type) {
    case OPEN_MAIN: {
      return { isOpenMain: true };
    }
    case CLOSE_MAIN: {
      return { isOpenMain: false };
    }
    case OPEN_FILIAL: {
      return { isOpenFilial: true };
    }
    case CLOSE_FILIAL: {
      return { isOpenFilial: false };
    }
    default: {
      return state;
    }
  }
};
