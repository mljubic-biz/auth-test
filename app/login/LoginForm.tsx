"use client";
import { Button } from "@spotted-zebra-uk/sz-ui-shared.ui.button";
import { TextInputField } from "@spotted-zebra-uk/sz-ui-shared.widgets.text-input-field";
import { FC, useState, FormEvent } from "react";
import { omit, isEmpty } from "lodash";

interface ILoginFormValues {
  email: string;
  password: string;
}

type ILoginFormErrors = Partial<ILoginFormValues>;

interface ILoginForm {
  initialValues?: ILoginFormValues;
  onSubmit: (email: string, password: string) => void;
}

const emailValidationRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const LoginForm: FC<ILoginForm> = (props) => {
  const [values, setValues] = useState<ILoginFormValues>({
    email: props.initialValues?.email || "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginFormErrors>({});

  const loginValidate = () => {
    const errors: ILoginFormErrors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailValidationRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = loginValidate();
    if (!isEmpty(newErrors)) {
      setErrors(newErrors);
    } else {
      props.onSubmit(values.email, values.password);
    }
  };

  const handleChangeEmail = (value: string) => {
    setValues((prevVal) => ({
      ...prevVal,
      email: value,
    }));

    if (errors?.email) {
      setErrors((prevValue) => omit(prevValue, "email"));
    }
  };

  const handleChangePassword = (value: string) => {
    setValues((prevVal) => ({
      ...prevVal,
      password: value,
    }));

    if (errors?.password) {
      setErrors((prevValue) => omit(prevValue, "password"));
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__fields">
        <TextInputField
          value={values.email}
          id="login-email"
          onChange={handleChangeEmail}
          label="Email"
          hasError={Boolean(errors?.email)}
          bottomText={errors?.email}
          autoComplete="username"
          placeholder="Email"
        />
        <TextInputField
          value={values.password}
          id="login-password"
          onChange={handleChangePassword}
          label="Password"
          type="password"
          hasError={Boolean(errors?.password)}
          bottomText={errors?.password}
          autoComplete="current-password"
          placeholder="Password"
        />
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
