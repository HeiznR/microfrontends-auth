import { atom, useAtom } from "jotai";

const inputValue = atom("");

export const useInput = () => useAtom(inputValue);
