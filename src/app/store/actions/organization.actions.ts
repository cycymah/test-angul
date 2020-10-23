import { Action } from '@ngrx/store';

export enum OrganizationActions {
  GetData = '[Organization] GetData',
  AddData = '[Organization] AddData',
  ChangeData = '[Organization] ChangeData',
}

export class GetMainData implements Action {
  readonly type = OrganizationActions.GetData;
}

export class AddMainOrganization implements Action {
  readonly type = OrganizationActions.AddData;

  constructor(
    public payload: {
      fullName: string;
      shortName: string;
      inn: string;
      kpp: string;
      mainPerson: string;
      adress: string;
      phone: string;
    }
  ) {}
}
