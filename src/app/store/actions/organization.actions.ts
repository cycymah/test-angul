import { Action } from '@ngrx/store';

export enum Actions {
  GetData = '[Organization] GetData',
  AddData = '[Organization] AddData',
  AddFilialData = '[Filial] AddData',
  ChangeData = '[Organization] ChangeData',
  OpenMain = '[Popups] OpenMain',
  OpenEditMain = '[Popups] OpenEditMain',
  ClosePopups = '[Popups] ClosePopups',
  OpenFilial = '[Popups] OpenFilial',
  OpenAddFilial = '[Popups] OpenAddFilial',
  addPopupInfo = '[Popups] AddPopupInfo',
  EditMainOrganization = '[Popups] EditMainOrganization',
}

export class GetMainData implements Action {
  readonly type = Actions.GetData;
}

export class AddOrganization implements Action {
  readonly type = Actions.AddData;

  constructor(
    public payload: {
      fullName: string;
      shortName: string;
      inn: string;
      kpp: string;
      mainPerson: string;
      adress: string;
      phone: string;
      id: number;
    }
  ) {}
}

export class OpenMain implements Action {
  readonly type = Actions.OpenMain;
  constructor() {}
}
export class OpenEditMain implements Action {
  readonly type = Actions.OpenEditMain;
  constructor() {}
}

export class EditMainOrganization implements Action {
  readonly type = Actions.EditMainOrganization;
  constructor(
    public payload: {
      fullName: string;
      shortName: string;
      inn: string;
      kpp: string;
      mainPerson: string;
      adress: string;
      phone: string;
      id: number;
    }
  ) {}
}

export class OpenFilial implements Action {
  readonly type = Actions.OpenFilial;
  constructor() {}
}

export class OpenAddFilial implements Action {
  readonly type = Actions.OpenAddFilial;
  constructor() {}
}

export class AddFilialData implements Action {
  readonly type = Actions.AddFilialData;
  constructor(
    public payload: {
      mainPerson: string;
      adress: string;
      phone: string;
      id: any;
    }
  ) {}
}

export class ClosePopups implements Action {
  readonly type = Actions.ClosePopups;
  constructor() {}
}

export class AddPopupInfo implements Action {
  readonly type = Actions.addPopupInfo;

  constructor(
    public payload: {
      fullName: string;
      shortName: string;
      inn: string;
      kpp: string;
      mainPerson: string;
      adress: string;
      phone: string;
      id: number;
    }
  ) {}
}

// export type Actions =
//   | AddPopupInfo
//   | ClosePopups
//   | AddFilialData
//   | OpenAddFilial
//   | OpenFilial
//   | EditMainOrganization
//   | OpenEditMain
//   | OpenMain;
