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
export default function User() {
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
    <div>
      {console.log(inputs[0])}
      <h3>UserName: {id}</h3>
      <div>
        {userInputs.map((input) => (
          <Stuff Component={inputs[input]} />
        ))}
      </div>
    </div>
  );
}

const Stuff = ({ Component }) => <Component />;
