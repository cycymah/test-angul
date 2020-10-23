import { Action } from '@ngrx/store';
import MainOrganizationInterface from '../../interfaces/MainOrganizationInterface';
import { GET, ADD_NEW, CHANGE } from '../constants/constants';

const initialOrganizations: MainOrganizationInterface[] = [
  {
    fullName: 'ФЫафывафыв',
    shortName: 'ЬЛО',
    inn: '237289043875',
    kpp: '12341234',
    mainPerson: 'Брых',
    adress: 'Адрес',
    phone: 'Телефон',
  },
  {
    fullName: 'ываф',
    shortName: 'ыва',
    inn: '2341234',
    kpp: '234',
    mainPerson: 'ва',
    adress: 'ыва',
    phone: 'ыва',
  },
  {
    fullName: 'ываф',
    shortName: 'ыва',
    inn: '!!!!!',
    kpp: '234',
    mainPerson: 'ва',
    adress: 'ыва',
    phone: 'ыва',
  },
];

export const organizationReducer = (
  state = initialOrganizations,
  action: Action
) => {
  // console.log(action.type, state);
  switch (action.type) {
    case ADD_NEW: {
      return [...state, action];
    }
    case CHANGE: {
      return [...state, action];
    }
    case GET: {
      return state;
    }
    default: {
      return state;
    }
  }
};
