import { Actions } from '../actions/organization.actions';

export interface State {
  isOpenMain: boolean;
  isOpenFilial: boolean;
  isOpenEditMain: boolean;
  officeModalData: any;
  mainOffice: any;
}

const initialState: State = {
  isOpenMain: false,
  isOpenFilial: false,
  isOpenEditMain: false,
  officeModalData: {
    fullName: '',
    shortName: '',
    inn: '',
    kpp: '',
    mainPerson: '',
    adress: '',
    phone: '',
    id: '',
  },
  mainOffice: [
    {
      fullName: 'ФЫафывафыв',
      shortName: 'ЬЛО',
      inn: '237289043875',
      kpp: '12341234',
      mainPerson: 'Брых',
      adress: 'Адрес',
      phone: 'Телефон',
      id: 1,
      filial: [
        {
          adress: 'Адрес',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 1,
        },
        {
          adress: '1',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 2,
        },
        {
          adress: '2',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 3,
        },
        {
          adress: '3',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 4,
        },
      ],
    },
    {
      fullName: '1',
      shortName: 'ыва',
      inn: '2341234',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
      id: 2,
      filial: [
        {
          adress: 'Адрес',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 1,
        },
        {
          adress: '1',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 2,
        },
      ],
    },
    {
      fullName: '2',
      shortName: 'ыва',
      inn: '!!!!!',
      kpp: '234',
      mainPerson: 'ва',
      adress: 'ыва',
      phone: 'ыва',
      id: 3,
      filial: [
        {
          adress: 'Адрес',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 1,
        },
        {
          adress: '1',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 2,
        },
      ],
    },
  ],
};

export const modalOpenReducer = (state = initialState, action: Actions) => {
  console.log(action.type, state);

  switch (action.type) {
    case Actions.OpenMain: {
      return { ...state, isOpenMain: true };
    }
    case Actions.OpenEditMain: {
      return { ...state, isOpenEditMain: true };
    }

    case Actions.OpenFilial: {
      return { ...state, isOpenFilial: true };
    }
    case Actions.ClosePopups: {
      return {
        ...state,
        isOpenFilial: false,
        isOpenMain: false,
        isOpenEditMain: false,
      };
    }
    case Actions.GetData: {
      return state;
    }
    case Actions.AddData: {
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
    case Actions.addPopupInfo: {
      return {
        ...state,
        officeModalData: {
          fullName: action.payload.fullName,
          shortName: action.payload.shortName,
          inn: action.payload.inn,
          kpp: action.payload.kpp,
          mainPerson: action.payload.mainPerson,
          adress: action.payload.adress,
          phone: action.payload.phone,
        },
      };
    }

    default: {
      return state;
    }
  }
};
