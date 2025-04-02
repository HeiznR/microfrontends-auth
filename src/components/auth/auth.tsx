import { useInput } from "../../store";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { signupJWT, loginJWT } from "../../api/authFetch";

// import { HStack, Separator, Text } from "@chakra-ui/react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { RiGoogleFill } from "react-icons/ri";

// type TForm = {
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

export enum AuthTypes {
  LOGIN = "login",
  SIGNUP = "signup",
}

// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Auth() {
  const [value, setValue] = useInput();
  //   const queryClient = useQueryClient();

  //const [authType, setAuthType] = useState<"login" | "signup">(type);
  //   const [error, setError] = useState<null | string>(null);
  //   const [form, setForm] = useState<TForm>({
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const signup = useMutation({
  //     mutationFn: signupJWT,
  //     mutationKey: ["signup"],
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["signup"] });
  //     },
  //   });
  //   const mlogin = useMutation({
  //     mutationFn: loginJWT,
  //     mutationKey: ["login"],
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["login"] });
  //     },
  //   });
  //TODO: google auth
  //   const login = useGoogleLogin({
  //     onSuccess: (tokenResponse) => console.log(tokenResponse),
  //   });

  //   const handleFormInputs = (inputData: Partial<TForm>) => {
  //     setForm((prevState) => {
  //       const updatedForm = { ...prevState, ...inputData };
  //       if (updatedForm.password && updatedForm.confirmPassword) {
  //         setError(
  //           updatedForm.password !== updatedForm.confirmPassword
  //             ? "Passwords do not match"
  //             : null
  //         );
  //       }
  //       return updatedForm;
  //     });
  //   };

  //   const sendForm = () => {
  //     // const name = form.email.split("@")[0];
  //     const { email } = form;

  //     if (!email.match(regex)) {
  //       setError("Email is not correct");
  //       setTimeout(() => {
  //         setError(null);
  //       }, 3000);

  //       return;
  //     }
  //     // if (type === AuthTypes.SIGNUP) {
  //     //   signup.mutate({ name, email, password });
  //     // } else {
  //     //   mlogin.mutate({ email, password });
  //     // }
  //   };

  //TODO: xss,

  //   const validateForm = () => {
  //     return AuthTypes.SIGNUP === type
  //       ? Boolean(form.email && form.password && form.confirmPassword)
  //       : Boolean(form.email && form.password);
  //   };
  //useful for single page handling
  // const toggleauthType = useCallback(() => {
  //   setAuthType((prev) =>
  //     prev === AuthTypes.LOGIN ? AuthTypes.SIGNUP : AuthTypes.LOGIN
  //   );
  //   setForm({ confirmPassword: "", email: "", password: "" });
  //   setError(null);
  // }, []);

  //   const authLabels = {
  //     email: "Email address",
  //     password: "Password",
  //     confirmPassword: "Confirm password",

  //     [AuthTypes.LOGIN]: {
  //       header: `Log in`,
  //       AuthTypeswitch: { text: `Don't have an account? `, link: "Sign up" },
  //       oauth: {
  //         google: "Log in",
  //       },
  //     },
  //     [AuthTypes.SIGNUP]: {
  //       header: `Sign up`,
  //       AuthTypeswitch: { text: `Already have an account? `, link: "Log in" },
  //       oauth: {
  //         google: "Sign up",
  //       },
  //     },
  //   };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
    // <div className="wrapper">
    //   {/* header */}
    //   <BoxUI label={authLabels[type].header} />
    //   {/* email adress */}
    //   <InputUI
    //     label={authLabels.email}
    //     name={"email"}
    //     value={form.email}
    //     callback={handleFormInputs}
    //   />
    //   {/* password */}
    //   <InputUI
    //     label={authLabels.password}
    //     name={"password"}
    //     value={form.password}
    //     inputType="password"
    //     callback={handleFormInputs}
    //   />
    //   {type === AuthTypes.SIGNUP && (
    //     // confirm password
    //     <>
    //       <InputUI
    //         label={authLabels.confirmPassword}
    //         name={"confirmPassword"}
    //         value={form.confirmPassword}
    //         inputType="password"
    //         callback={handleFormInputs}
    //       />
    //     </>
    //   )}
    //   {/* error display component */}
    //   {error && <Text color="red.500">{error}</Text>}
    //   {/* send button */}
    //   <ButtonUI
    //     disabled={!validateForm()}
    //     callback={sendForm}
    //     label="Send"
    //     size="md"
    //   />
    //   {/* <LinkBoxUI
    //     label={authLabels[authType].AuthTypeswitch.text}
    //     linkLabel={authLabels[authType].AuthTypeswitch.link}
    //     callback={() => {}}
    //     href={authType === AuthTypes.SIGNUP ? "login" : "signup"}
    //   /> */}
    //   {/* separator */}
    //   <HStack>
    //     <Separator flex="1" />
    //     <Text flexShrink="0" color={"black"}>
    //       Or
    //     </Text>
    //     <Separator flex="1" />
    //   </HStack>
    //   {/* oauth */}
    //   <div>
    //     {/* google */}
    //     <ButtonUI
    //       callback={() => {}}
    //       label={`${authLabels[type].oauth.google} in with Google 🚀`}
    //       size="md"
    //       icon={<RiGoogleFill />}
    //       variant={"outline"}
    //     />
    //   </div>
    // </div>
  );
}
