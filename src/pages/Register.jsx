import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
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
    
    const response = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formData)
    })
    console.log(response)
  }

  function onChange(e) {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value})
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-semibold mb-4">Register</p>
      <Form onSubmit={onSubmit} 
      onChange= {onChange} inputs={inputs} buttonText="Register" />
      <p className="text-xs text-white/50 font-light mt-1">
        Already registered?{" "}
        <Link to="/sign-in" className="text-tiny-orange">
          Sign in
        </Link>
      </p>
    </main>
  );
}
