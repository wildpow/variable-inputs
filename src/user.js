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
      <h3>User Name: {id}</h3>
      <div className="input-wrapper">
        {userInputs.map((input) => (
          <Comnponents Component={inputs[input]} onChange={dispatch} />
        ))}
      </div>
      {console.log("State outputs to console on input", state)}
    </div>
  );
}

const Comnponents = ({ Component, onChange }) => (
  <Component onChange={onChange} />
);
