import { Action } from '@ngrx/store';
import { OrganizationActions } from '../actions/organization.actions';
import {
  OPEN_MAIN,
  CLOSE_MAIN,
  OPEN_FILIAL,
  CLOSE_FILIAL,
  GET,
  ADD_NEW,
} from '../constants/constants';

export interface State {
  isOpenMain: boolean;
  isOpenFilial: boolean;
  mainOffice: any;
}

const initialState: State = {
  isOpenMain: false,
  isOpenFilial: false,
  mainOffice: [
    {
      fullName: 'ФЫафывафыв',
      shortName: 'ЬЛО',
      inn: '237289043875',
      kpp: '12341234',
      mainPerson: 'Брых',
      adress: 'Адрес',
      phone: 'Телефон',
      filial: [
        {
          adress: 'Адрес',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
        },
        {
          adress: '1',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
        },
        {
          adress: '2',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
        },
        {
          adress: '3',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
        },
      ],
    },
    {
      fullName: 'ываф',
      shortName: 'ыва',
      inn: '2341234',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
      filial: [],
    },
    {
      fullName: 'ываф',
      shortName: 'ыва',
      inn: '!!!!!',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
      filial: [],
    },
  ],
};

export const modalOpenReducer = (
  state = initialState,
  action: OrganizationActions
) => {
  console.log(action.type);

  switch (action.type) {
    case OPEN_MAIN: {
      return { ...state, isOpenMain: true };
    }
    case CLOSE_MAIN: {
      return { ...state, isOpenMain: false };
    }
    case OPEN_FILIAL: {
      return { ...state, isOpenFilial: true };
    }
    case CLOSE_FILIAL: {
      return { ...state, isOpenFilial: false };
    }
    case OrganizationActions.GetData: {
      console.log(state.mainOffice);
      return state.mainOffice;
    }
    case OrganizationActions.AddData: {
      console.log(action.payload.inn);
      return {
        ...state,
        mainOffice: [
          ...state.mainOffice,
          {
            fullName: action.payload.fullName,
            shortName: action.payload.shortName,
            inn: action.payload.inn,
            kpp: action.payload.kpp,
            mainPerson: action.payload.mainPerson,
            adress: action.payload.adress,
            phone: action.payload.phone,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};
