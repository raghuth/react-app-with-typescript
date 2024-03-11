import { FC, useContext, useReducer, useState } from "react";
import { reducer } from "./context/Reducer";
import { Contact, State } from "./context/State";
import { Button } from "@material-ui/core";

const initialState: State = {
  contacts: [],
};

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [list, setList] = useState<Contact | null>();
  const [itemName, setItemName] = useState<Contact | null>();

  const handleAdd = () => {
    console.log("handleAdd");
    if (itemName) {
      const newItem: Contact = {
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
      };

      // dispatch({ _type: "ADD_PERSON", payload: newItem });
      setItemName(newItem);
    }
  };
  return (
    <>
      <div>Context ApI Crud</div>
      <input
        placeholder="firstName"
        name="firstName"
        value={list?.firstName}
        onChange={(e) => console.log(e.target.value)}
      />
      <Button onClick={(e) => dispatch({ _type: "ADD_PERSON" })}>Add</Button>
      <p>Contact List: {state.contacts.map((item) => item.firstName)}</p>
    </>
  );
};

export default App;
