import React from "react";
import PhoneNumber from "../Phone/PhoneNumber";

const FormGroup = ({
  type = "text",
  name,
  label,
  required,
  invalid,
  error,
  placeholder,
  onChange,
  interacted,
}) => {
  let input = null;
  switch (type) {
    case "text":
    case "email":
      input = (
        <input
          className="formControl"
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        />
      );
      break;
    case "phone":
      input = (
        <PhoneNumber
          id={name}
          invalid={invalid}
          onChange={(e) => onChange(name, e)}
          interacted={interacted}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className="formControl"
          rows={4}
          id={name}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        />
      );
      break;
  }

  return (
    <>
      {input}
      {invalid && <span className="">{error}</span>}
    </>
  );
};

export default FormGroup;
