import { ActionReducerMap } from '@ngrx/store';
import { modalOpenReducer } from './modal.reducer';
import { organizationReducer } from './organization.reducer';
// import { combineReducers } from '@ngrx/store';

// export interface reduce
export const combineReducers = {
  modalReducer: modalOpenReducer,
  organizationReducer: organizationReducer,
};
