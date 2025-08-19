import { ReactNode } from 'react';
import { CustomStepperEnum } from '../enam';

export interface ICheckedFormDataState {
  statusEnter: number;
  statusView: boolean;
}

export interface IDataTable {
  arr?: never[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];

  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
}

export interface AccountPagesState {
  status: number;
  count: CustomStepperEnum;
  globalArrayAccount: IProduct[];
}

type IVariant = 'contained' | 'text' | 'outlined';

export interface IButtonProps {
  text: string;
  variant: IVariant;
  handleClick: () => void;
}
export interface IMainContain {
  children?: ReactNode;
  step: CustomStepperEnum;
}
