import { Contact, Update } from "./State";

export type Actions =
  ADD_PERSON
  | EDIT_PERSON
  | DELETE_PERSON
  ;

export interface ADD_PERSON {
  _type: 'ADD_PERSON';
  // payload: Contact;
}

export interface EDIT_PERSON {
  _type: 'EDIT_PERSON';
  payload: Contact | Update;
}

export interface DELETE_PERSON {
  _type: 'DELETE_PERSON';
  payload: Contact | Update;
}

