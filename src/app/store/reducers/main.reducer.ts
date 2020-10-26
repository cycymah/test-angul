import { Actions } from '../actions/organization.actions';

export interface State {
  isOpenMain: boolean;
  isOpenFilial: boolean;
  isOpenEditMain: boolean;
  isOpenAddFilial: boolean;
  officeModalData: any;
  mainOffice: any;
}

const initialState: State = {
  isOpenMain: false,
  isOpenFilial: false,
  isOpenEditMain: false,
  isOpenAddFilial: false,
  officeModalData: {
    fullName: '',
    shortName: '',
    inn: '',
    kpp: '',
    mainPerson: '',
    adress: '',
    phone: '',
    id: 0,
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
          id: 23,
        },
        {
          adress: '1',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 42,
        },
        {
          adress: '2',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 234,
        },
        {
          adress: '3',
          mainPerson: 'Должностное лицо',
          phone: 'Телефон',
          id: 42,
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

export const mainReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    // Открытие / закрытие попапов
    case Actions.OpenMain: {
      return { ...state, isOpenMain: true };
    }
    case Actions.OpenEditMain: {
      return { ...state, isOpenEditMain: true };
    }

    case Actions.OpenFilial: {
      return { ...state, isOpenFilial: true };
    }

    case Actions.OpenAddFilial: {
      return { ...state, isOpenAddFilial: true };
    }

    case Actions.ClosePopups: {
      return {
        ...state,
        isOpenFilial: false,
        isOpenMain: false,
        isOpenEditMain: false,
        isOpenAddFilial: false,
      };
    }

    case Actions.GetData: {
      return state;
    }

    // Добавляем головной офис
    case Actions.AddData: {
      return {
        ...state,
        mainOffice: [...state.mainOffice, action.payload],
      };
    }

    // Добавляем филиал
    case Actions.AddFilialData: {
      const filialState = state.mainOffice.map((office) =>
        office.id === action.payload.id
          ? {
              ...office,
              filial: [...office.filial, action.payload],
            }
          : office
      );
      return {
        ...state,
        mainOffcie: filialState,
      };
    }

    // Передаем информацию о текущем оппапе в стейт для дальнейшего использования
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
          id: action.payload.id,
        },
      };
    }

    case Actions.EditMainOrganization: {
      const newState = state.mainOffice.map((item) =>
        item.id === action.payload.id
          ? { ...action.payload, filial: item.filial }
          : item
      );

      return {
        ...state,
        mainOffice: newState,
      };
    }

    default: {
      return state;
    }
  }
};
