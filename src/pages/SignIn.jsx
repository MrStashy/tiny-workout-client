import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../utils/apiFunctions";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const inputs = [
    {
      name: "email",
      label: "Email",
      type: "textbox",
      placeholder: "example@gmail.com",
      value: formData.email
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: formData.password
    },
  ];

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await login(formData)
      navigate("/dashboard")
    } catch(e) {
      console.log(e)
    }
  }

  function onChange(e) {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value})
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-semibold mb-4">Sign In</p>
      <Form onSubmit={onSubmit} 
      onChange= {onChange} inputs={inputs} buttonText="Sign In" />
      <p className="text-xs text-white/50 font-light mt-1">
        Not signed up?{" "}
        <Link to="/register" className="text-tiny-orange">
          Register
        </Link>
      </p>
    </main>
  );
}
