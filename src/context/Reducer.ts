import { Reducer, Dispatch } from 'react';
import { Contact, State, Update } from "./State";
import { Actions } from "./Actions";

export type StateDispatch = Dispatch<Actions>;

export const reducer: Reducer<State, Actions> = (state:State, action:Actions): State => {
    console.log("state",state)
    console.log("action",action)
  switch (action._type) {
    case "ADD_PERSON":
        // const {payload} = action
      return {
        ...state,
        contacts: [...state.contacts]
      };
    case "EDIT_PERSON":
      const { id, updates } = action.payload as Update;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              ...updates
            };
          }
          return contact;
        })
      };
      case 'DELETE_PERSON': {
        const { id } = action.payload;
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== id)
        };
      }
      
    default:
      return state;
  }
};

