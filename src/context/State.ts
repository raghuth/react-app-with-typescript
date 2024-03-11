// local


export interface State {
  count?: number;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Update {
  id: number;
  updates?: Contact;
}

export interface Item {
  id: number;
  name: string;
}
interface StateList {
  // The list of items to display in the UI
  items: Item[];
}