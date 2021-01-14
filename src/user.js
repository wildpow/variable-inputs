import { useReducer } from "react";
import { useParams } from "react-router-dom";
import userData from "./userData";
import {
  FirstName,
  LastName,
  MiddleName,
  Age,
  OtherText,
  OtherText2,
  Tel,
  CheckBox,
  Message,
  Email,
} from "./inputs";
import "./user.css";

const reducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};
const initialState = {};
export default function User() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let { id } = useParams();
  const inputs = [
    FirstName,
    LastName,
    MiddleName,
    Age,
    OtherText,
    OtherText2,
    Tel,
    CheckBox,
    Message,
    Email,
  ];
  const userInputs = userData[id];

  return (
    <div className="user-root inner-wrapper">
      {console.log(state)}
      <h3>User Name: {id}</h3>
      <div className="input-wrapper">
        {userInputs.map((input) => (
          <Stuff Component={inputs[input]} onChange={dispatch} />
        ))}
      </div>
    </div>
  );
}

const Stuff = ({ Component, onChange }) => <Component onChange={onChange} />;
