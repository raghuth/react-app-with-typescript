export interface Item {
    id: number;
    name: string;
  }
  
  export type Action =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'UPDATE_ITEM'; payload: Item }
    | { type: 'DELETE_ITEM'; payload: number };
  
  export interface AppState {
    items: Item[];
  }
  
  export type AppReducer = (state: AppState, action: Action) => AppState;