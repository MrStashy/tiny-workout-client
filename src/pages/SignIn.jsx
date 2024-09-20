import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../utils/apiFunctions";
import { useNavigate } from "react-router-dom";
import { validateSignInCredentials } from "../utils/validationFunctions/"
import LoadingSpinner from "../components/LoadingSpinner";

export default function SignIn({setToken}) {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [inputs, setInputs] = useState([{
    name: "email",
    label: "Email",
    type: "textbox",
    placeholder: "example@gmail.com",
    value: formData.email,
    error: ""
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    value: formData.password,
    error: ""
  }])

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true)
   
    try {
      await validateSignInCredentials(formData.email, formData.password)
      console.log(formData)
      const token = await login(formData)
      setToken(token)
      navigate("/dashboard")
    } catch(e) {
      const updatedInputs = inputs.map((input) => {
        if (e === "Log in failed") {
          return { ...input, error: "Email or password incorrect" }
        }
        if (e[input.name]) {
          return { ...input, error: e[input.name] };
        } else {
          return { ...input, error: "" };
        }
      });
      setInputs(updatedInputs);
    } 
      setSubmitting(false)
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
      <p className="text-white text-2xl font-semibold">Sign In</p>
      <div>
      <Form onSubmit={onSubmit} 
      onChange= {onChange} inputs={inputs} buttonText="Sign In" />
      <p className="text-xs text-white/50 font-light mt-1 text-center">
        Not signed up?{" "}
        <Link to="/register" className="text-tiny-orange">
          Register
        </Link>
      </p>
      </div>
      {submitting && <LoadingSpinner />}
    </main>
  );
}
