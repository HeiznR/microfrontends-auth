import { atom, useAtom } from "jotai";

const inputValue = atom("");

const useInput = () => useAtom(inputValue);

export default useInput;
