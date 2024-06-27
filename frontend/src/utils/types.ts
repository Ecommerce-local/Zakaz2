export enum ROLES {
  USER = 0,
  MANAGER = 1,
  ADMIN = 2,
}

export interface IRequest {
  message: string;
}

export interface IRequestError extends IRequest {
  statusCode: number;
}

export interface IFetch {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  body?: BodyInit | Record<string, unknown>;
}

export interface IUser {
  email: string;
  id: number;
  auth_level: ROLES;
}

export interface IAuthData extends IUser {
  token: string;
}

export interface ISnackBar {
  isOpen?: boolean;
  text: string;
  hasError?: boolean;
}

export interface IConfirmPopup {
  isOpen: boolean;
  cb: () => void;
}

export interface IFIle {
  destination: string;
  encoding: string;
  fildName: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}

export type TGender = 'male' | 'female' | 'unisex';
export type TActiveTime = '15d' | '30d' | '90d';

export interface IItemDto
  extends Omit<IItem, 'id' | 'start_sell_date' | 'end_sell_date'> {
  active_time: TActiveTime;
}

export interface IItem {
  id: number;
  name: string;
  description: string;
  price: number;
  start_sell_date: Date;
  end_sell_date: Date;
  is_active: boolean;
  gender: TGender;
  type: string;
  main_image: string;
  images: string[];
}
