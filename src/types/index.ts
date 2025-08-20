import { ReactNode } from 'react';
import { CustomStepperEnum } from './enam';

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export interface ICheckedFormDataState {
  statusEnter: number;
  statusView: boolean;
}

export interface IDataTable {
  arr?: never[];
}

export interface AccountPagesState {
  status: number;
  count: CustomStepperEnum;
  globalArrayAccount: IProduct[];
}

type IVariant = 'contained' | 'text' | 'outlined';

export interface IButtonPr {
  text: string;
  variant: IVariant;
  handleClick?: () => void;
}
export interface IMainContain {
  children?: ReactNode;
  step: CustomStepperEnum;
}
