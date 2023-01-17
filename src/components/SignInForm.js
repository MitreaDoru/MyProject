import styled from "./SignInForm.module.css";
import useForm from "../hooks/use-form";
import SignInLogInHeader from "./SignInLogInHeader";
const SignInForm = () => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlur,
    resetInputHandler: emailReset,
  } = useForm((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlur,
    resetInputHandler: passwordReset,
  } = useForm((value) => value.length >= 7);

  const sendRequest = async () => {
    const response = await fetch(
      "https://react-http-29f4a-default-rtdb.europe-west1.firebasedatabase.app/user.json",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Sending data failed");
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid && !passwordIsValid) {
      return;
    }
    try {
      sendRequest();
    } catch (error) {
      console.log(error);
    }
    emailReset();
    passwordReset();
  };
  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const emailStyled = emailIsInvalid
    ? `${styled.formControl} ${styled.invalid}`
    : styled.formControl;
  const passwordStyled = passwordIsInvalid
    ? `${styled.formControl} ${styled.invalid}`
    : styled.formControl;
  return (
    <div>
      <SignInLogInHeader />
      <form onSubmit={formSubmitHandler}>
        <div className={styled.form}>
          <div className={emailStyled}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailInputBlur}
              value={enteredEmail}
            />
            {emailIsInvalid && <p>Input a correct email format</p>}
          </div>
          <div className={passwordStyled}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordInputBlur}
              value={enteredPassword}
            />
            {passwordIsInvalid && <p>Try to use a long password</p>}
          </div>
          <div className={styled.formActions}>
            <button disabled={!formIsValid} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
