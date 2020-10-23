import { createAction, props } from '@ngrx/store';
import { OPEN, CLOSE } from '../constants/constants';

const popupOpen = createAction(OPEN);
const popupClose = createAction(CLOSE);
