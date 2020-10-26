import { Action } from '@ngrx/store';

export enum Actions {
  GetData = '[Organization] GetData',
  AddData = '[Organization] AddData',
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
}
export class OpenEditMain implements Action {
  readonly type = Actions.OpenEditMain;
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
}

export class OpenAddFilial implements Action {
  readonly type = Actions.OpenAddFilial;
}

export class ClosePopups implements Action {
  readonly type = Actions.ClosePopups;
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
