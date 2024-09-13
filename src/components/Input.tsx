import { useState } from "react";
import {
  updateFilterEmail,
  updateFilterName,
  updateFilterPhone,
  updateFilterUsername,
} from "../api/users/filterSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

interface Prop {
  inputField: string;
  previousField: string;
  setPreviousField: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputField, previousField, setPreviousField }: Prop) => {
  const dispatch = useAppDispatch();
  const [fieldInput, setFieldInput] = useState("");

  const handleInputChange = (value: string) => {
    switch (inputField) {
      case "name":
        dispatch(updateFilterName(value));
        break;
      case "username":
        dispatch(updateFilterUsername(value));
        break;
      case "email":
        dispatch(updateFilterEmail(value));
        break;
      case "phone":
        dispatch(updateFilterPhone(value));
        break;
      default:
        break;
    }
  };

  const handleOpenField = () => {
    setPreviousField(inputField);
    setFieldInput("");
    handleInputChange("");
  };

  const handleCloseField = () => {
    setFieldInput("");
    setPreviousField("");
  };

  return previousField === inputField ? (
    <>
      <input
        type="text"
        placeholder={inputField}
        onChange={(e) => {
          setFieldInput(e.target.value);
          handleInputChange(e.target.value);
        }}
        value={fieldInput}
      />
      <button onClick={handleCloseField}>❌</button>
    </>
  ) : (
    <button onClick={handleOpenField}>🔎</button>
  );
};

export default Input;
