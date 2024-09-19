/* eslint-disable react/prop-types */
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateRegisterCredentials } from "../utils/validationFunctions";
import { createUser } from "../utils/apiFunctions";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Register({ setJustRegistered }) {
  const [submitting, setSubmitting] = useState(false)
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
      constraints: ["8+ characters long.", "Includes a capital letter.", "Includes a number."]
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
      error: "",
    }
  ]);
  const navigate = useNavigate()

  async function onSubmit(e) {
    setSubmitting(true)
    e.preventDefault();
    const { username, password, confirmPassword, email } = formData;
    try {
      await validateRegisterCredentials(username, password, confirmPassword, email);
      const data = await createUser(formData)
      if (data.error) {
        console.error(data.error)
      }
      localStorage.setItem('Token', data.user.token)
      setJustRegistered(true)
      navigate("/user-details")
    } catch (e) {
      const updatedInputs = inputs.map((input) => {
        if (e[input.name]) {
          return { ...input, error: e[input.name] };
        } else {
          return { ...input, error: "" };
        }
      });
      setInputs(updatedInputs);
    } finally {
      setSubmitting(false)
    }
  }

  function onChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, error: "" } : input
      )
    );
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center gap-4">
      <p className="text-white text-2xl font-semibold">Register</p>
      <div>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs}
        buttonText="Register"
      />
      <p className="text-xs text-white/50 font-light text-center">
        Already registered?{' '}
        <Link to="/sign-in" className="text-tiny-orange">
           Sign in
        </Link>
      </p>
      </div>
     {submitting && <LoadingSpinner />} 
    </main>
  );
}
