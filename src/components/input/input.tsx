import { ChangeEvent } from "react";

interface IInput {
  value: string;
  type: string;
  callback: (input: { [key: string]: string }) => void;
}

export const Input = ({ value, callback, type }: IInput) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    callback({ [type]: e.target.value });
  };
  return <input key={type} value={value} onChange={(e) => handleInput(e)} />;
};
