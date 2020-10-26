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
      fullName: 'Копыта и Рога',
      shortName: 'КиР',
      inn: '237289043875',
      kpp: '12341234',
      mainPerson: 'Брых К.А.',
      adress: 'Адрес 72ю - 34',
      phone: '2839403',
      id: 1,
      filial: [
        {
          adress: 'Карикатурная 65 - 324',
          mainPerson: 'Хахихин И.А.',
          phone: '2003254',
          id: 23,
        },
        {
          adress: 'Смешнушная 23 - 24',
          mainPerson: 'Должностнолицев В.Н.',
          phone: '4333223',
          id: 42,
        },
        {
          adress: 'Веселковая 54 - 32',
          mainPerson: 'Хихахин А.И.',
          phone: '3456765',
          id: 234,
        },
        {
          adress: 'Юморная 65 - 34',
          mainPerson: 'Хахатушкина О.О.',
          phone: '3455342',
          id: 42,
        },
      ],
    },
    {
      fullName: 'Самые отреставрированные сети',
      shortName: 'СОС',
      inn: '87562341234',
      kpp: '2342341',
      mainPerson: 'Шышкин Н.И.',
      adress: 'Раритетная 234 - 87',
      phone: '2347543',
      id: 2,
      filial: [
        {
          adress: 'Лютая 453 - 3',
          mainPerson: 'Геральд из Ривии',
          phone: '3425345',
          id: 1,
        },
        {
          adress: 'Винтерфелл 54 - 23',
          mainPerson: 'Эддард Старк',
          phone: '42438765',
          id: 2,
        },
      ],
    },
    {
      fullName: 'У Амуна',
      shortName: 'УА',
      inn: '3453466723',
      kpp: '6784534234',
      mainPerson: 'Балгруф Р.Н.',
      adress: 'Вайтран 34 - 23',
      phone: '7569784',
      id: 3,
      filial: [
        {
          adress: 'Краснодеревяжная 45 - 53',
          mainPerson: 'Красивушкин Ж.О.',
          phone: '75673452',
          id: 1,
        },
        {
          adress: 'Еслибпроехал 54 - 534',
          mainPerson: 'Кржкин Л.В.',
          phone: '32587234',
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

    // Редактирование головной организации
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
