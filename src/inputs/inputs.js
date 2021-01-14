export const FirstName = ({ onChange, value }) => (
  <label htmlFor="firstName" id="firstName" className="input-label">
    <span>Fist Name</span>
    <input
      placeholder="Percival"
      required
      type="text"
      id="firstName"
      name="firstName"
      autoComplete="given-name"
      value={value}
      onChange={(e) => onChange({ type: "firstName", payload: e.target.value })}
    />
  </label>
);

export const MiddleName = ({ onChange, value }) => (
  <label htmlFor="middleName" id="middleName" className="input-label">
    <span>Middle Name</span>
    <input
      required
      type="text"
      id="middleName"
      name="middleName"
      autoComplete="additional-name"
      placeholder="Panda"
      value={value}
      onChange={(e) =>
        onChange({ type: "middleName", payload: e.target.value })
      }
    />
  </label>
);

export const LastName = ({ onChange, value }) => (
  <label htmlFor="lastName" id="lastName" className="input-label">
    <span>Last Name</span>
    <input
      required
      type="text"
      id="lastName"
      name="lastName"
      autoComplete="family-name"
      placeholder="Panda"
      value={value}
      onChange={(e) => onChange({ type: "lastName", payload: e.target.value })}
    />
  </label>
);

export const Age = ({ onChange, value }) => (
  <label htmlFor="age" id="age" className="input-label">
    <span>Age</span>
    <input
      required
      type="number"
      id="age"
      name="age"
      autoComplete="additional-name"
      placeholder={1}
      value={value}
      onChange={(e) => onChange({ type: "age", payload: e.target.value })}
    />
  </label>
);
export const Tel = ({ onChange, value }) => (
  <label htmlFor="tel" className="input-label">
    <span>Phone</span>
    <input
      autoComplete="tel-national"
      pattern="^[0-9-+s()]*$"
      type="tel"
      name="tel"
      placeholder="***-***-****"
      value={value}
      onChange={(e) => onChange({ type: "tel", payload: e.target.value })}
    />
  </label>
);

export const Email = ({ onChange, value }) => (
  <label htmlFor="email" className="input-label">
    <span>Email</span>
    <input
      required
      placeholder="youremail@email.com"
      type="email"
      name="email"
      autoComplete="email"
      value={value}
      onChange={(e) => onChange({ type: "email", payload: e.target.value })}
    />
  </label>
);

export const Message = ({ onChnage, value }) => (
  <label htmlFor="message" className="message">
    <textarea
      onChange={(e) => onChnage({ type: "message", payload: e.target.value })}
      placeholder="Enter your message here..."
      required
      type="text"
      value={value}
      name="message"
    />
  </label>
);

export const CheckBox = ({ onChnage, value }) => (
  <label htmlFor="checkBox" className="checkBox">
    <input
      onChange={(e) => onChnage({ type: "checkBox", payload: e.target.value })}
      required
      type="checkbox"
      checked={value}
      name="checkBox"
    />
  </label>
);

export const OtherText = ({ onChange, value }) => (
  <label htmlFor="otherText" id="otherText" className="input-label">
    <span>Other Text</span>
    <input
      placeholder="other 1"
      required
      type="text"
      id="otherText"
      name="otherText"
      value={value}
      onChange={(e) => onChange({ type: "otherText", payload: e.target.value })}
    />
  </label>
);

export const OtherText2 = ({ onChange, value }) => (
  <label htmlFor="otherText2" id="otherText2" className="input-label">
    <span>Other Text</span>
    <input
      placeholder="Other 2"
      required
      type="text"
      id="otherText2"
      name="otherText2"
      value={value}
      onChange={(e) =>
        onChange({ type: "otherText2", payload: e.target.value })
      }
    />
  </label>
);
