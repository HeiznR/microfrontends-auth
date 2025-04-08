import { useCallback, useState } from "react";
import { Input } from "../input/input";
import styles from "./auth.module.scss";

interface IForm {
  email: string;
  password: string;
  confirmedPass: string;
}

enum InputType {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRMED_PASS = "confirmedPass",
}

export const Auth = () => {
  const [data, setData] = useState<IForm>({
    email: "",
    password: "",
    confirmedPass: "",
  });

  const handleInput = useCallback((value: Partial<IForm>) => {
    setData((prevValue) => ({ ...prevValue, ...value }));
  }, []);

  const sendForm = useCallback(() => {
    //TODO:validation
    console.log("sent", data);
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <Input type={InputType.EMAIL} callback={handleInput} value={data.email} />
      <Input
        type={InputType.PASSWORD}
        callback={handleInput}
        value={data.password}
      />
      <Input
        type={InputType.CONFIRMED_PASS}
        callback={handleInput}
        value={data.confirmedPass}
      />
      <button style={{ color: "white" }} onClick={sendForm}>
        {"Send"}
      </button>
    </div>
  );
};
