import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateRegisterCredentials } from "../utils/validationFunctions";
import { createUser } from "../utils/apiFunctions";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [inputs, setInputs] = useState([
    {
      name: "email",
      label: "Email",
      type: "textbox",
      placeholder: "example@gmail.com",
      value: formData.email,
      error: "",
    },
    {
      name: "username",
      label: "Username",
      type: "textbox",
      placeholder: "Username",
      value: formData.username,
      error: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
      error: "",
    },
  ]);
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault();
    const { username, password, email } = formData;
    try {
      await validateRegisterCredentials(username, password, email);
      await createUser(formData)
      navigate("/user-details")
    } catch (e) {
      const updatedInputs = inputs.map((input) => {
        if (e[input.name]) {
          return { ...input, error: e[input.name] };
        } else {
          return { ...input, error: false };
        }
      });
      setInputs(updatedInputs);
    }
  }

  function onChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, error: false } : input
      )
    );
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-semibold mb-4">Register</p>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs}
        buttonText="Register"
      />
      <p className="text-xs text-white/50 font-light mt-1">
        Already registered?
        <Link to="/sign-in" className="text-tiny-orange">
           Sign in
        </Link>
      </p>
    </main>
  );
}
